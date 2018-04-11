---
title: "RxJS 살펴보기- 5"
date: "2017-11-20T23:48:32.000Z"
path: "/rxjs-5/"
tags: ["javascript", "rxjs", "functional reactive programming", "frp", "reactivex"]
summary: "Transform Operators 변형 연산자는 옵저버블의 값의 형태를 변형하는 작업을 한다 buffer 제공된 값이 방출될 때까지 값들을 모은 뒤, 배열로 한꺼번에 방출한다."
components: [{
  rootId: 'register-rx',
  fileName: 'register-rx',
}]
category: "RxJS"
images: ["images/rxjs.jpg"]
---

`Ctrl+Shift+J` (Windows / Linux) 또는 `Cmd+Opt+J` (Mac)를 눌러 콘솔창을 연 뒤, 전역 객체에 등록되어 있는 `Rx`를 사용하여 예제 코드를 실행할 수 있다.<br />
(\* 참고 : `subscription.unsubscribe();`을 통해 옵저버블 관찰을 취소할 수 있다.)

<div class="none" id="register-rx"></div>

## Transform Operators
`변형` 연산자는 옵저버블의 값의 형태를 변형하는 작업을 한다

### buffer
제공된 값이 방출될 때까지 값들을 모은 뒤, 배열로 한꺼번에 방출한다.

```js
var interval$ = Rx.Observable.interval(100);
var buffer$ = Rx.Observable.concat(Rx.Observable.timer(490),
Rx.Observable.timer(290));
var bufferedInterval$ = interval$.buffer(buffer$);
var subscription = bufferedInterval$.subscribe(console.log);

// [0, 1, 2, 3], [4, 5, 6]
```

### bufferTime
주어진 시간이 지날 때까지 방출된 값을 모은 뒤, 배열로 방출한다.

```js
var interval$ = Rx.Observable.interval(500);
var bufferTime$ = interval$.bufferTime(2000);
var subscription = bufferedInterval$.subscribe(console.log);
// [0, 1, 2], [3, 4, 5, 6], [7, 8, 9, 10], ...
```

### concatMap
내부 옵저버블에 값을 매핑하고, 구독한며 순서대로 값을 방출한다.

```js
var source$ = Rx.Observable.of('Hello', 'Goodbye');
var concatMap$ = source$.concatMap(val => Rx.Observable.of(`${val}, World!`));
var subscription = concatMap$.subscribe(console.log);
// Hello, World!
// Goodbye, World!
```

### map
각 값에 투영함수를 적용하여 값을 변형한다.

```js
var source$ = Rx.Observable.from([1, 2, 3, 4]);
var map$ = source$.map(val => val * 2);
var subscription = map$.subscribe(console.log);
// 2 4 6 8
```

### mapTo
방출되는 값을 일정한 값으로 매핑한다. (방출되는 값이 상수로 변환된다고 보면 된다.)

```js
var source$ = Rx.Observable.interval(1000);
var mapTo$ = source$.mapTo('CONSTANT');
var subscription = mapTo$.subscribe(console.log);
// CONSTANT
// CONSTANT
// CONSTANT
// ...
```

### mergeMap
내부 옵저버블이 방출되면, 해당 값을 바깥 옵저버블과 함께 병합한다.

```js
var outer$ = Rx.Observable.of('a', 'b');
var inner$ = Rx.Observable.interval(1000);
var mergeMap$ = outer$.mergeMap(
  outer => inner$.map(
    inner =>
      `Outer : ${outer} / Inner: ${inner}`
  )
);
var subscription = mergeMap$.subscribe(console.log);
// after 1s
// Outer : a / Inner : 0
// Outer : b / Inner : 0
// after 2s
// Outer : a / Inner : 1
// Outer : b / Inner : 1
// after 3s
// Outer : a / Inner : 2
// Outer : b / Inner : 2
```

### pluck
프로퍼티를 선택한다. (중첩된 프로퍼티를 가져오기 위해서는 `n`개의 프로퍼티를 전달한다.)

```js
var click$ = Rx.Observable.fromEvent(document, 'click');
var pluck$ = click$.pluck('target', 'value');
var subscription = pluck$.subscribe(console.log);
```

위 코드는 `pluck`을 통해 클릭된 노드의 내용을 가져온다.<br />
이를 `map`을 통해 구현하면 다음과 같다.

```js
var click$ = Rx.Observable.fromEvent(document, 'click');
var map$ = click$.map(e => e.target.value);
var subscription = map$.subscribe(console.log);
```

`map`보다는 `pluck`이 좀 더 간결하다.
(물론, `lodash`의 `fp`를 사용하면, `map(fp.get('target.value'))`처럼 `pluck`과 유사하게 사용할 수 있다.)

### reduce
소스가 완료될 때, 한 개의 값으로 줄여진 값을 방출한다.<br />
`Array.prototype.reduce`처럼 순회하면서 실행할 콜백함수와 초기값을 전달받는다.

```js
var source$ = Rx.Observable.of(1, 2, 3, 4);
var reduce$ = source$.reduce((prev, curr) => prev + curr, 0);
var subscription = reduce$.subscribe(console.log);
// 10
```

### scan
소스가 완료되어 하나의 값을 방출할 때까지의 값들을 차례로 방출한다.<br />
`reduce`와 하는 일이 거의 유사하지만, 중간 과정의 값들이 방출된다는 점이 다르다.

```js
var interval$ = Rx.Observable.interval(1000).take(5);
var scan$ = interval$.scan((prev, curr) => prev + curr, 0);
var subscription = scan$.subscribe(console.log);
// 0 1 3 6 10
```

### switchMap
mergeMap과 비슷하지만, 외부 옵저버블이 내부 옵저버블의 이전 구독을 취소할 때 발생한다.<br />
즉, 외부 옵저버블이 발생될 때마다 내부 옵저버블의 새로운 구독이 시작된다.

예를 들어 아래와 같은 코드는 클릭을 할 때마다 이전의 구독이 취소되고 새 구독이 시작된다.

```js
var click$ = Rx.Observable.fromEvent(document, 'click');
var inner$ = Rx.Observable.interval(1000);
var switchMap$ = click$.switchMap(() => inner$);
var subscription = switchMap$.subscribe(console.log);
// click
// 0
// 1
// 2
// click
// 0
// click
// 0
// ...
```

## 정리
자주 사용되거나 알아두면 좋을 `변형 연산자`에 대한 간단한 설명과 사용 예제를 정리하였다.<br />
더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.

## 참고
- http://reactivex.io/rxjs
- https://www.learnrxjs.io

※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.
