---
title: "RxJS 살펴보기- 2"
date: "2017-11-14T23:52:58.000Z"
path: "/rxjs-2/"
tags: ["javascript", "rxjs", "functional reactive programming", "frp", "reactivex"]
summary: "Combination Operators 조합 연산자는 여러 옵저버블을 결합할 수 있게 해준다. combineAll 외부 옵저버블이 완료되면, 내부 옵저버블(옵저버블의 옵저버블)의 최근 값들을 출력한다."
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

## Combination Operators
`조합` 연산자는 여러 `옵저버블`을 결합할 수 있게 해준다.

### combineAll

외부 옵저버블이 완료되면, 내부 옵저버블(옵저버블의 옵저버블)의 최근 값들을 출력한다.

`combineAll`에 함수가 전달되면, 각각의 내부 옵저버블의 최근 값과 함께 호출된다.<br />
그리고, 함수가 전달되지 않으면, 가장 최근 값의 배열이 옵저버블 출력에 의해 방출된다.

```js
// Pass the function in `combineAll`
var arr$ = Rx.Observable.of(null);
var example$ = arr$.mapTo(Rx.Observable.of('Hello', 'World'));
var combined$ = example$.combineAll();
var subscription = combined$.subscribe(val => console.log('Value from inner Observable:', val));
// Value from inner Observable: ["Hello"]
// Value from inner Observable: ["World"]

// Does not Pass the function in `combineAll`
// Does not Pass the function in `combineAll`
var arr$ = Rx.Observable.of(null);
var example$ = arr$.mapTo(Rx.Observable.of('Hello', 'World'));
var combined$ = example$.combineAll(val => `${val}, Wonism!`);
var subscription = combined$.subscribe(val => console.log('Value with delivered function to `combineAll`:', val));
// Value with delivered function to `combineAll`: Hello, Wonism!
// Value with delivered function to `combineAll`: Bye, Wonism!
```

### combineLatest

여러 옵저버블의 그룹이 주어지고 그 중 하나가 방출될 때, 각각의 최신 값들을 방출한다.<br />
두 옵저버블을 `combineLatest`로 조합한 옵저버벌을 시간축에 그리면 다음과 같다.

```
---a------b--------------c------>
-1-----2-----3----4---5-----6--->

vvvvvvvvv combineLatest vvvvvvvvv

---a1--a2-b2-b3---b4--b5-c5-c6-->
```

```js
var firstOb$ = Rx.Observable.timer(0, 3000);
var secondOb$ = Rx.Observable.timer(1000, 2000);
var combined$ = Rx.Observable.combineLatest(firstOb$, secondOb$).take(20);
var subscription = combined$.subscribe(console.log);
// 0, 0
// 1, 0
// 1, 1
// 1, 2
// 2, 2
// 2, 3
// 2, 4
// ...
```

### concat

옵저버블을 순서대로 구독한다. 이 때, 이전 시퀀스가 완료되어야만 다음 시퀀스가 시작된다.<br />
이전 시퀀스가 끝나지 않으면 다음 시퀀스가 실행되지 않는다.<br />

```
----a--b--c-->
              --1--2----3--4->

vvvvvvvvvvv concat vvvvvvvvvvv

----a--b--c-----1--2----3--4->
```

```js
var one$ = Rx.Observable.of(1, 'a');
var two$ = Rx.Observable.of(2, 'b');
var concatenated$ = one$.concat(two$);

var subscription = concatenated$.subscribe(console.log);
// 1
// a
// 2
// b
```

```js
var one$ = Rx.Observable.of(1, 'a');
var two$ = Rx.Observable.of(2, 'b');
var delayedOne$ = one$.delay(1000);
var concatenated$ = delayedOne$.concat(two$);

var subscription = concatenated$.subscribe(console.log);
// after 1s
// 1
// a
// 2
// b
```

```js
var unfinishableOne$ = Rx.Observable.interval(1000);
var two$ = Rx.Observable.of('This won\'t not be finished');
var concatenated$ = Rx.Observable
  .concat(
    unfinishableOne$,
    two$,
  );

var subscription = concatenated$.subscribe(console.log);
```

### forkJoin

`forkJoin`은 `Promise.all`과 비슷하다.<br />
모든 옵저버블이 완료되면, 마지막에 각각의 값을 방출한다.<br />
옵저버블을 병렬로 실행하고자 할 때 사용한다.

```js
var one$ = Rx.Observable.timer(2000).mapTo({ name: 'one' });
var two$ = Rx.Observable.timer(3000).mapTo({ name: 'two' });
var joined$ = Rx.Observable.forkJoin(one$, two$);

var subscription = joined$.subscribe(console.log);
```

### merge

여러 옵저버블을 하나로 줄인다.

```
---a-----b----c----d---->
-----1-----2----3------->

vvvvvvvvv merge vvvvvvvvv

---a-1---b-2--c-3--d---->
```

```js
var firstOb$ = Rx.Observable.interval(600).mapTo('A');
var secondOb$ = Rx.Observable.interval(500).mapTo('B');
var thirdOb$ = Rx.Observable.interval(400).mapTo('C');

var merged$ = Rx.Observable.merge(
  firstOb$,
  secondOb$,
  thirdOb$,
);
var subscription = merged$.subscribe(console.log);
// C, B, A, C, B, A, ...

var mergedWithInstance$ = firstOb$.merge(thirdOb$);
var subscription = mergedWithInstance$.subscribe(console.log);
// C, A, C, A, C, C, A, ...
```

### pairwise

이전 값과 현재 값을 배열로 방출한다.

```js
var interval$ = Rx.Observable.interval(1000).take(5);
var pairwise$ = interval$.pairwise();
var subscription = pairwise$.subscribe(console.log);
// [0, 1], [1, 2], [2, 3], [3, 4]
```

### startWith

`startWith`는 해당 값을 먼저 방출하게 한다.

```js
var source$ = Rx.Observable.of(1, 2, 3);
var sourceWithStart$ = source$.startWith(-10, -9);

var subscription = sourceWithStart$.subscribe(console.log);
// -10, -9, 1, 2, 3
```

### withLatestFrom

옵저버블과 `withLatestFrom`에 전달된 옵저버블이 결합하는데, 이 때 만들어진 옵저버블은 `withLatestFrom`을 호출한 옵저버블이 방출될때만 각각의 최신 값을 통해서만 만들어진다.

```js
var slower$ = Rx.Observable.interval(3000);
var faster$ = Rx.Observable.interval(1000);

var combined$ = slower$
  .withLatestFrom(faster$)
  .map(([first, second]) => `${first} ${second}`);

var subscription = combined$.subscribe(console.log);
// 0 1
// 1 4
// 2 7
// 3 10
// ...

var combined2$ = faster$
  .withLatestFrom(slower$)
  .map(([first, second]) => `${first} ${second}`);

var subscription = combined2$.subscribe(console.log);
// 2 0
// 3 0
// 4 1
// 5 1
// 6 2
// 7 2
// ...
```

## 정리
자주 사용되거나 알아두면 좋을 `조합 연산자`에 대한 간단한 설명과 사용 예제를 정리하였다.<br />
더 많은 연산자를 공부하려면 아래 사이트를 참고하는 것이 좋다.<br />

다음에는 `Observable`의 `Conditional` 연산과 `Creation` 연산에 대해 알아보겠다.

## 참고
- http://reactivex.io/rxjs
- https://www.learnrxjs.io

※ 모든 예제 코드는 직접 작성한 코드입니다. 다른 곳에서 사용하실 경우 출처를 남겨주시면 감사하겠습니다.
