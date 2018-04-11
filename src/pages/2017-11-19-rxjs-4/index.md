---
title: "RxJS 살펴보기- 4"
date: "2017-11-19T23:03:27.000Z"
path: "/rxjs-4/"
tags: ["javascript", "rxjs", "functional reactive programming", "frp", "reactivex"]
summary: "Filtering Operators 필터 연산자는 옵저버블의 원하는 값만을 선택해 여과하게 해준다. 바로 아래 있는 컴퍼넌트는 몇 가지 옵저버블 예제를 직접 확인할 수 있는 컴퍼넌트이다."
components: [{
  rootId: 'register-rx',
  fileName: 'register-rx',
}, {
  rootId: 'rx-with-input',
  fileName: 'rx-example/rx-with-input',
}]
category: "RxJS"
images: ["images/rxjs.jpg"]
---

`Ctrl+Shift+J` (Windows / Linux) 또는 `Cmd+Opt+J` (Mac)를 눌러 콘솔창을 연 뒤, 전역 객체에 등록되어 있는 `Rx`를 사용하여 예제 코드를 실행할 수 있다.<br />
(\* 참고 : `subscription.unsubscribe();`을 통해 옵저버블 관찰을 취소할 수 있다.)

<div class="none" id="register-rx"></div>

## Filtering Operators
`필터` 연산자는 옵저버블의 원하는 값만을 선택해 여과하게 해준다.<br />
바로 아래 있는 컴퍼넌트는 몇 가지 옵저버블 예제를 직접 확인할 수 있는 컴퍼넌트이다.

<div id="rx-with-input"></div>

### debounceTime
출력 사이의 지정된 시간보다 적은 시간에 방출된 모든 값들을 버린다.

```js
var input = document.querySelector('input');

var input$ = Rx.Ovservable
  .fromEvent(input, 'input')
  .pluck('target', 'value')
  .debounceTime(400)

var subscription = input$.subscribe(console.log);
```

### distinctUntilChanged
현재 값이 이전의 마지막 값과 다른 경우에만 값을 방출한다.

```js
var input = document.querySelector('input');

var input$ = Rx.Ovservable
  .fromEvent(input, 'input')
  .pluck('target', 'value')
  .debounceTime(400)
  .distinctUntilChanged()

var subscription = input$.subscribe(console.log);
```

(충분한 `debounceTime`이 주어졌다고 가정하고) `Hello`를 입력한 뒤, 다시 `Hello`를 입력하면 옵저버는 아무런 반응을 하지 않는다는 것을 볼 수 있다.

### throttleTime
지정된 시간동안 처음의 값을 제외한 모든 값들을 버린다.<br />
스크롤 이벤트를 제어하는 데 주로 사용된다.

```js
var input$ = Rx.Ovservable
  .fromEvent(input, 'input')
  .throttleTime(1000)
  .pluck('target', 'value');

var subscription = input$.subscribe(console.log);

var scroll$ = Rx.Observable
  .fromEvent(window, 'scroll')
  .throttleTime(1000);

var subscription = scroll$.subscribe(console.log);
```

### filter
`filter`에 전달된 값을 통해 수행된 연산의 결과가 `true`를 반환하는 값들만 방출시킨다.<br />
(`Array.prototype.filter`와 같은 역할을 한다.)

```js
var filtered$ = Rx.Observable
  .of(1, 2, 3, 4, 5)
  .filter(value => value % 2 === 0);

var subscription = filtered$.subscribe(console.log);
// 2, 4
```

### take
`take`에 전달된 값과 같은 개수의 값들만을 방출한다.

```js
var take5$ = Rx.Observable
  .interval(100)
  .take(5);

var subscription = take5$.subscribe(console.log);
```

### takeUntil
주어진 옵저버블이 방출될 때까지 값을 방출한다.

```js
var interval$ = Rx.Observable.interval(100);
var filter$ = interval$.filter(i => i > 5);
var takeUntil$ = interval$.takeUntil(filter$);

var subscription = takeUntil$.subscribe(console.log);
// 1, 2, 3, 4, 5

var interval$ = Rx.Observable.interval(100);
var timer$ = Rx.Observable.timer(500);
var takeUntil$ = interval$.takeUntil(timer$);

var subscription = takeUntil$.subscribe(console.log);
// 0, 1, 2, 3
```

## 정리
자주 사용되거나 알아두면 좋을 `필터링 연산자`에 대한 간단한 설명과 사용 예제를 정리하였다.<br />
더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.<br />

다음에는 `Observable`의 `Transformation` 연산에 대해 알아보겠다.

## 참고
- http://reactivex.io/rxjs
- https://www.learnrxjs.io

※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.
