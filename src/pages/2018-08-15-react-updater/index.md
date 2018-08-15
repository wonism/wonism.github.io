---
title: "React를 실질적으로 제어하는 updater"
date: "2018-08-15T02:00:56.000Z"
path: "/react-updater/"
tags: ["javascript", "react", "reactjs", "reconciliation"]
summary: "node_modules에서 react 모듈의 내용을 보면, react는 추상 클래스의 모음이고, 실제 중요한 로직들은 대부분 react-reconsiler, react-dom 등 안에 구현되어 있다."
category: "JavaScript"
images: ["images/reactjs.jpg"]
---

`node_modules`에서 `react` 모듈의 내용을 보면, `react`는 추상 클래스의 모음이고, 실제 중요한 로직들은 대부분 `react-reconsiler`, `react-dom` 등 안에 구현되어 있다.<br />
이번 글에서 알아보고자 하는 `updater`(`UpdateQueue`)는 `setState` 및 `forceUpdate` 등에 사용된다.

(이 글은 React 16.4.1 버전을 기준으로 작성되었다.)

`react`의 `Component`를 살펴보면, `updater`가 사용된다는 것을 살펴볼 수 있다.

```js
/**
 * Base class helpers for the updating state of a component.
 */
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}
```

## UpdateQueue
`updater`는 `react-reconsiler`의 `ReactUpdateQueue`에서 살펴볼 수 있다.<br />
이 파일에서 export 되는 `UpdateQueue`는 우선 순위가 지정된 업데이트의 링크드 리스트이다.

이들은 (일종의 이중 버퍼링으로) 현 상태 큐와 작업 진행 중 큐로 구성이 되며, 이 각 큐는 다음과 같은 특징을 가진다.

- 현 상태 큐 : 화면 내 가시 상태를 나타낸다.
- 작업 진행 중 큐 : 커밋되기 전에 비동기적으로 변형되거나 처리될 수 있다. (만약, 작업 진행 중 렌더가 끝나기 전에 버려진다면, 현 상태 큐를 복제함으로써 새로운 작업 진행 중 큐를 만들게 된다.)

여기서 위 두 가지 큐는 영속적이고, 단일 링크된 리스트 구조를 공유한다.<br />
이 때, 업데이트를 스케줄링하려면,

1. 두 큐의 끝 부분에 업데이트를 추가한다.
2. 각 큐는 `아직 처리되지 않은 영속적인 리스트`에서의 첫 업데이트에 대한 포인터를 관리한다.
3. 작업 진행 중 포인터는 항상 현 상태 큐와 같거나 큰 위치를 갖게 된다.
4. 현 상태 큐의 포인터는 커밋 단계 안에서**만** 업데이트가 이루어진다.

```
A - B - C - D - E - F (현재 상태 포인터)
            D - E - F (작업 진행 중 포인터)
            ^
            작업 진행 중 큐는 현 상태 큐보다 많은 업데이트를 처리했다.
```

업데이트를 하기 위해 두 개의 큐를 사용하는 이유는 업데이트의 손실 등을 방지하기 위함이다.<br />

만약,

1. 작업 진행 중 큐에**만** 업데이트를 추가한다면, 현재 상테 렌더를 복제함으로써 작업 진행 중 렌더를 재시작 할 때마다 어떤 업데이트들이 없어질 수 있다.
2. 현재 큐에**만** 업데이트를 추가한다면, 이미 진행 중인 큐가 커밋되고 현재 큐와 교체될 때마다 업데이트가 없어질 것이다.

하지만, 두 큐 모두에 업데이트를 추가함으로써 업데이트가 다음 작업 진행 중에 있도록 보장할 수 있으며,<br />
이 때, 진행 중 작업 큐가 커밋되면 현재 상태 큐가 되기 때문에 업데이트가 중복 발생할 일이 없다.

### 업데이트 우선순위
업데이트는 우선 순위별로 정렬되지 않고, 삽입에 의해 정렬된다.<br />
새 업데이트는 항상 리스트의 마지막에 추가되지만, 우선순위는 업데이트 처리에 중요한 영향을 미친다.

렌더 단계동안 업데이트 큐를 처리할 때, 충분한 우선순위를 가진 업데이트만 처리가 된다.<br />
우선 순위가 충분하지 않은 업데이트는 처리되지 않고 큐에 남아있다가, 나중에 처리가 된다.<br />
(이 때, 생략된 업데이트 이후의 모든 업데이트는 우선순위에 상관 없이 큐에 남아있게 된다.)

이 말은 우선 순위가 높은 업데이트는 두 개의 별도 우선 순위에서 두 번 처리될 수 있다는 뜻이다.<br />
이 때, 리액트는 큐 안에 있는 첫 번째 업데이트가 적용되기 전의 상태를 추적한다.

이는 아래 도식을 통해 설명할 수 있다.

```
업데이트 큐
A1 - B2 - C1 - D2
```

```
기본 상태
''
```

이 때, 숫자는 우선 순위를 나타내며, 업데이트는 이전 상태에 문자를 추가함으로써 적용이 된다.

리액트는 이러한 업데이트를 두 개의 별도 우선 순위 별 렌더로 처리한다.

```
우선 순위 1의 첫 번째 렌더링

상태의 변화 :
'' -> 'AC'

처리될 업데이트 :
[A1, C1]
```

```
우선 순위 2의 두 번째 렌더링

상태의 변화 :
'A' -> 'ABCD'

처리될 업데이트 :
[B2, C1, D2]
```

기본 상태는 `C1`을 포함하지 않는데, `B2`가 생략되었기 때문이다.
`C1`은 `B2`위에 리베이스된다.

이처럼, 삽입 순서로 업데이트를 처리하고, 앞선 업데이트가 생략될 때 우선 순위가 높은 업데이트를 리배이스하기 때문에 우선 순위에 상관 없이 최종 결과가 결정된다.
(중간 상태는 시스템 자원에 따라 달라질 수 있지만, 최종 상태는 항상 동일하다.)

## 참고
- [Github Repository : react-reconciler](https://github.com/facebook/react/blob/master/packages/react-reconciler/README.md)

## 더 알아보기
- [Youtube : Dan Abramov: Beyond React 16 | JSConf Iceland 2018](https://www.youtube.com/watch?v=nLF0n9SACd4)
