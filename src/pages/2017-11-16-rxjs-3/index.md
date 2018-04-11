---
title: "RxJS 살펴보기- 3"
date: "2017-11-16T22:56:32.000Z"
path: "/rxjs-3/"
tags: ["javascript", "rxjs", "functional reactive programming", "frp", "reactivex"]
summary: "Conditional Operators 조건 연산자는 특정 조건에서 무언가를 수행할 수 있게 해준다.  defaultIfEmpty 완료 전에 아무것도 방출되지 않거나 `null`이 방출되면, 주어진 값을 방출한다."
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

## Conditional Operators
`조건` 연산자는 특정 조건에서 무언가를 수행할 수 있게 해준다.

### defaultIfEmpty
아무것도 방출되지 않으면, 주어진 값을 방출한다.<br />
(`of`에 `undefined`, `null`를 넘기면 이들이 방출된 것으로 간주되어 주어진 값이 방출되지 않는다.)

```js
var empty$ = Rx.Observable.of();
var defaultIfEmpty$ = empty$.defaultIfEmpty('Empty Observable');
var subscription = defaultIfEmpty$.subscribe(console.log);
// Empty Observable

var empty$ = Rx.Observable.empty();
var defaultIfEmpty$ = empty$.defaultIfEmpty('Empty Observable');
var subscription = defaultIfEmpty$.subscribe(console.log);
// Empty Observable
```

### every
모든 값들이 조건을 통과하면 `true` 그렇지 않으면 `false`가 반환된다.

```js
var mixed$ = Rx.Observable.of(1, 2, 3, 4, 5);
var areNotEvens$ = mixed$.every(val => val % 2 === 0);
var subscription = areNotEvens$.subscribe(console.log);
// false

var evens$ = Rx.Observable.of(2, 4, 6, 8, 10);
var areEvens$ = evens$.every(val => val % 2 === 0);
var subscription = areEvens$.subscribe(console.log);
// true
```

## Creation Operators
`생성` 연산자는 옵저버블을 만들 때 사용된다.<br />
모든 것들을 스트림으로 바꾸는 게 가능하다.

### create
함수를 통해 옵저버블을 생성한다.<br />
매개변수로 전달된 `observer`의 `next` 메소드를 실행할 때마다 값이 생성된다.<br />
또한, `observer`는 `error`메소드와 `complete`메소드가 있으며, 이름대로 각각 에러를 발생시키거나 옵저버블을 완료시킨다.<br />
(주의할 것은 `error` 또한 옵저버블을 종료시킨다는 것이다.)

```js
var helloWorld$ = Rx.Observable.create((observer) => {
  observer.next('Hello');
  setTimeout(() => {
    observer.error('Error');
  }, 2000);
  observer.next('World');
  // observer.next()는 undefined를 반환하기 때문에 체이닝할 수 없다.
});

// subscribe에 객체를 전달할 수도 있으며,
// 이 객체는 `next`, `error`, `complete` 등의 프로퍼티를 가진다.
var subscription = helloWorld$.subscribe({
  next(value) {
    console.log(value);
  },
  error(err) {
    console.error(err);
  },
  compelete() {
    console.log('DONE');
  }
});
// Hello
// World
// Error
```

```js
var interval$ = Rx.Observable.create((observer) => {
  var i = 0;
  var interval = window.setInterval(() => { observer.next(i++); }, 1000);
});

var subscription = interval$.subscribe(console.log);
// 0
// 1
// 2
// ...
```

### from
배열, 프로미스 등을 옵저버블로 만든다.

```js
var array$ = Rx.Observable.from([1, 2, 3, 4, 5]);
var subscription = array$.subscribe(console.log);
// 1, 2, 3, 4, 5
```

```js
var promise$ = Rx.Observable.from(new Promise(resolve => resolve('Promise')));
var subscription = promise$.subscribe(console.log);
// Promise
```

```js
var string$ = Rx.Observable.from('String');
var subscription = string$.subscribe(console.log);
// S, t, r, i, n, g
```

### fromEvent
이벤트를 옵저버블 시퀀스로 만든다.

```js
var event$ = Rx.Observable.fromEvent(document, 'click', true);
var coords$ = event$.map(e => e.target);
var subscription = coords$.subscribe(console.log);
// DOM Element
```

### of
인자로 전달된 값들을 시퀀스로 만든다.

**※ 주의** : `from`에서 배열을 전달하는 것과 헷갈리면 안 된다.<br />
(`Function.prototype.call`과 `Function.prototype.apply`의 차이처럼)

```js
var source$ = Rx.Observable.of({ num: 42 }, [1, 2, 3], function hello() { return 'Hello'; });
var subscription = source$.subscribe(console.log);
// { num: 42 }, [1, 2, 3], function hello() { return 'Hello'; }
```

## 정리
자주 사용되거나 알아두면 좋을 `조건 연산자`와 `생성 연산자`에 대한 간단한 설명과 사용 예제를 정리하였다.<br />
더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.<br />

다음에는 `Observable`의 `Filtering` 연산에 대해 알아보겠다.

## 참고
- http://reactivex.io/rxjs
- https://www.learnrxjs.io

※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.
