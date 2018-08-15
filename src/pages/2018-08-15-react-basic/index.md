---
title: "React - 기본적인 이론 컨셉"
date: "2018-08-15T20:34:38.000Z"
path: "/react-basic/"
tags: ["javascript", "reactjs"]
summary: "이 문서는 필자의 React 모델에 대한 이해를 설명하기 위한 문서이다. 이 디자인을 이끄는 연역적 추론의 관점에서 이를 설명하고자 한다."
category: "JavaScript"
images: ["images/reactjs.jpg"]
---

참고 : 이 문서는 [react-basic](https://github.com/reactjs/react-basic) 을 번역한 것으로 의역 혹은 오역이 있을 수 있음을 참고바랍니다.

이 문서는 필자의 React 모델에 대한 이해를 설명하기 위한 문서이다.
이 디자인을 이끄는 연역적 추론의 관점에서 이를 설명하고자 한다.

분명 논쟁의 여지가 있는 몇 가지 전제가 있을 수 있으며, 예제의 실제 디자인은 버그나 틈이 있을 수 있다.
이 예제는 단지 공식화의 시작이며,
어떻게 공식화하는 지에 대한 더 좋은 아이디어가 있다면 망설이지 말고 [Pull Request](https://github.com/reactjs/react-basic/pulls)를 보내주길 바란다.
단순 > 복잡으로의 진행은 너무 많은 라이브러리 세부사항 없이도 합당해야 한다.

리액트의 실제 구현은 실용적인 솔루션, 점진적 단계, 알고리즘 최적화, 레거시 코드, 디버깅 툴 및 실제로 유용하게 만드는 데 필요한 것들로 구성되어있다.
그러한 것들은 순간적이며, 시간이 흐름에 따라 더 효율적이고 높은 우선 순위를 가지는 것들과 바뀔 수 있다.
실제 구현은 추론하기가 매우 어렵다.

나는 내가 생각할 수 있는 더 단순한 이해를 하고 싶다.

## 변형

리액트의 핵짐 전제는 UI가 단순히 데이터를 다른 형식의 데이터로 투영한다는 것이다.
동일한 입력은 항상 동일한 결과를 출력하며, 단순한 순수 함수이다.

```js
function NameBox(name) {
  return { fontWeight: 'bold', labelContent: name };
}
```

```
'Sebastian Markbåge' ->
{ fontWeight: 'bold', labelContent: 'Sebastian Markbåge' };
```

## 추상

하나의 함수에 복잡한 UI를 넣을 수 없다.
UI를 재사용 가능한 부분으로 추상화하는 것이 중요하며, 재사용 가능한 부분은 구현 세부 사항을 누설하지 않는다.
하나의 함수를 다른 함수에서 호출한다.

```js
function FancyUserBox(user) {
  return {
    borderStyle: '1px solid blue',
    childContent: [
      'Name: ',
      NameBox(user.firstName + ' ' + user.lastName)
    ]
  };
}
```

```
{ firstName: 'Sebastian', lastName: 'Markbåge' } ->
{
  borderStyle: '1px solid blue',
  childContent: [
    'Name: ',
    { fontWeight: 'bold', labelContent: 'Sebastian Markbåge' }
  ]
};
```

## 구성

진정으로 재사용할 수 있는 기능을 구성하기 위해서는 단순히 재사용 가능한 것들을 사용하는 것만으로는 충분하지 않다.
그들을 위한 새로운 컨테이너를 구성해야 한다.
또한, 다른 추상화를 구성하는 컨테이너에서 추상화를 구성할 수 있어야 한다.
내가 구성에 대해 생각하는 방식은 둘 이상의 다른 추상화를 새로운 추상화로 결합하는 것이다.

```js
function FancyBox(children) {
  return {
    borderStyle: '1px solid blue',
    children: children
  };
}

function UserBox(user) {
  return FancyBox([
    'Name: ',
    NameBox(user.firstName + ' ' + user.lastName)
  ]);
}
```

## 상태
UI는 단순히 서버와 비지니스 로직의 상태에 대한 사본이 아니다.
실제로 정확한 투영과 관련이 있는 상태가 많이 있으며, 다른 투영과는 관련이 없다.
예를 들어 텍스트 필드에 입력을 하면, 다른 탭이나 모바일 기기에 복제되거나 복제되지 않을 수 있다.
스크롤 위치는 여러 투영 사이에 거의 복제되지 않는 전형적인 예이다.

우리는 데이터 모델이 불변하기를 선호하는 경향이 있다.
우리는 맨 위에 있는 단일 원자로써 상태를 업데이트 할 수 있는 함수를 쓰레드한다.

```js
function FancyNameBox(user, likes, onClick) {
  return FancyBox([
    'Name: ', NameBox(user.firstName + ' ' + user.lastName),
    'Likes: ', LikeBox(likes),
    LikeButton(onClick)
  ]);
}

// Implementation Details

var likes = 0;
function addOneMoreLike() {
  likes++;
  rerender();
}

// Init

FancyNameBox(
  { firstName: 'Sebastian', lastName: 'Markbåge' },
  likes,
  addOneMoreLike
);
```

참고 : 이 예제는 상태를 업데이트하기 위해 사이드 이펙트를 사용한다.
실제 리액트의 모델은 업데이트 과정에서 다음 버전의 상태를 반환한다.
위의 코드처럼 설명하는 것이 더 간단하지만, 미래에 이 예제를 바꾸고자 한다.

## 메모이제이션

어떤 함수가 순수하다는 것을 아는 상태에서 그 함수를 반복해서 호출하는 것은 낭비이다.
마지막 인자와 마지막 결과를 추적하는 메모이즈된 버전의 함수를 만들 수 있다.
이렇게 하면 같은 값을 넘겨받는 함수를 다시 실행할 필요가 없다.

```js
function memoize(fn) {
  var cachedArg;
  var cachedResult;
  return function(arg) {
    if (cachedArg === arg) {
      return cachedResult;
    }
    cachedArg = arg;
    cachedResult = fn(arg);
    return cachedResult;
  };
}

var MemoizedNameBox = memoize(NameBox);

function NameAndAgeBox(user, currentTime) {
  return FancyBox([
    'Name: ',
    MemoizedNameBox(user.firstName + ' ' + user.lastName),
    'Age in milliseconds: ',
    currentTime - user.dateOfBirth
  ]);
}
```

역자 주 : [메모이제이션에 대해 작성한 글](https://wonism.github.io/memoization/)을 보면 더 자세히 알 수 있다.

## 리스트

대부분의 UI는 목록에 있는 각 항목에 대해 여러 값을 만드는 어떤 형태의 목록이다.
이것은 자연적인 계층 구조를 만든다.

목록에 있는 각 항목에 대한 상태를 관리하기 위해 특정 항목의 상태를 유지하는 `Map`을 만들 수 있다.

```js
function UserList(users, likesPerUser, updateUserLikes) {
  return users.map(user => FancyNameBox(
    user,
    likesPerUser.get(user.id),
    () => updateUserLikes(user.id, likesPerUser.get(user.id) + 1)
  ));
}

var likesPerUser = new Map();
function updateUserLikes(id, likeCount) {
  likesPerUser.set(id, likeCount);
  rerender();
}

UserList(data.users, likesPerUser, updateUserLikes);
```

참고 : 이제 `FancyNameBox`에 전달되는 여러 다른 인자들이 있다.
여러 다른 인자들과 함께 호출되는 함수로 하여금 메모이제이션을 깨지게 하는데, 한 번에 하나의 값만 기억할 수 있기 때문이다.
아래에 더 자세한 내용이 후술된다.

## 연속성

불행히도, UI 목록에는 너무 많은 목록이 있어서 명시적으로 관리해야하는 상용구 코드가 많아진다.

함수의 실행을 연기함으로써 상용구 코드의 일부를 중요 비지니스 로직 바깥으로 옮기는 것이 가능하다.
예를 들어, `Partial Application`을 사용할 수 있다.
그 다음, 상용구 코드로 부터 자유로워진 핵심 함수의 외부로부터 상태를 전달한다.

역자 주 : 원 글에서는 `Partial Application`이 아닌 `Currying`이라고 되어있다. 하지만 커링이라면, `box.children(likesPerUser)(updateUserLikes)`과 같이 코드가 작성되어야 한다. 이 외에도 `bind` 에 대한 링크가 추가되어 있는데, 별 관련성이 없다고 생각하기 때문에 제거하였다. 커링과 파셜 애플리케이션의 차이는 [Javascript- Currying VS Partial Application](https://codeburst.io/javascript-currying-vs-partial-application-4db5b2442be8)에서 더 자세하게 볼 수 있다.

이것은 상용구 코드를 줄이진 않지만, 중요한 비지니스 로직 바깥으로 벗어나야 한다.

```js
function FancyUserList(users) {
  return FancyBox(
    UserList.bind(null, users)
  );
}

const box = FancyUserList(data.users);
const resolvedChildren = box.children(likesPerUser, updateUserLikes);
const resolvedBox = {
  ...box,
  children: resolvedChildren
};
```

## 상태 Map

앞서 우리는 반복되는 패턴을 볼 때 같은 패턴을 다시 구현하는 것을 피하기 위해 구성을 할 수 있다는 것을 안다.
상태를 추출하고 전달하는 로직을 재사용되는 저수준 함수로 옮길 수 있다.

```js
function FancyBoxWithState(
  children,
  stateMap,
  updateState
) {
  return FancyBox(
    children.map(child => child.continuation(
      stateMap.get(child.key),
      updateState
    ))
  );
}

function UserList(users) {
  return users.map(user => ({
    continuation: FancyNameBox.bind(null, user),
    key: user.id
  }));
}

function FancyUserList(users) {
  return FancyBoxWithState.bind(null,
    UserList(users)
  );
}

const continuation = FancyUserList(data.users);
continuation(likesPerUser, updateUserLikes);
```

## 메모이제이션 Map

목록에 있는 여러 항복을 메모이즈하는 것은 상당히 어렵다.
메모리 사용량과 빈도 사이의 균형을 맞추는 복잡한 캐싱 알고리즘을 찾아야 한다.

다행히도, UI는 동일한 위치에서 안정되려는 경향이 있다.
트리의 같은 위치는 항상 같은 값을 가지며, 이 트리는 메모이제이션에 유용한 전략임이 밝혀졌다.

우리는 상태에 사용했던 것과 동일한 트릭을 사용할 수 있으며, 구성 가능한 함수를 통해 메모이제이션 캐시를 전달할 수 있다.

```js
function memoize(fn) {
  return function(arg, memoizationCache) {
    if (memoizationCache.arg === arg) {
      return memoizationCache.result;
    }
    const result = fn(arg);
    memoizationCache.arg = arg;
    memoizationCache.result = result;
    return result;
  };
}

function FancyBoxWithState(
  children,
  stateMap,
  updateState,
  memoizationCache
) {
  return FancyBox(
    children.map(child => child.continuation(
      stateMap.get(child.key),
      updateState,
      memoizationCache.get(child.key)
    ))
  );
}

const MemoizedFancyNameBox = memoize(FancyNameBox);
```

## 대수학 효과

여러 수준의 추상화를 통해 필요한 모든 작은 값을 전달하는 것은 PITA와 같은 것으로 밝혀졌다.
중간 생성자를 포함하지 않은 채 두 추상화 사이에서 무언가를 전달하기 위한 지름길을 갖는 것이 때때로 바람직하다.
리액트에서는 이것을 `컨텍스트`라고 부른다.

역자 주 : PITA의 뜻이 뭔지 찾아봤는데, 알아내지 못했다. 원문은 다음과 같다.<br />
It turns out that it is kind of a PITA to pass every little value you might need through several levels of abstractions.

때로는 데이터 종속성이 추상화 트리를 완전히 따르지 않는 경우가 있다.
예를 들어, 레이아웃 알고리즘에서 하위의 크기를 알아야 그들의 위치를 완전하게 이행할 수 있다.

이제, 이 예제는 조금 바깥에 있다.
[ECMAScript](https://esdiscuss.org/topic/one-shot-delimited-continuations-with-effect-handlers)에 제안된 [대수학 효과](http://math.andrej.com/eff/)를 사용하겠다.
함수형 프로그래밍에 익숙하다면 모나드에 의해 부과된 중간 식을 피할 것이다.

```js
function ThemeBorderColorRequest() { }

function FancyBox(children) {
  const color = raise new ThemeBorderColorRequest();
  return {
    borderWidth: '1px',
    borderColor: color,
    children: children
  };
}

function BlueTheme(children) {
  return try {
    children();
  } catch effect ThemeBorderColorRequest -> [, continuation] {
    continuation('blue');
  }
}

function App(data) {
  return BlueTheme(
    FancyUserList.bind(null, data.users)
  );
}
```
