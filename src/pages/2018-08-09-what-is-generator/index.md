---
title: "JavaScript Generator 이해하기"
date: "2018-08-08T00:35:14.000Z"
path: "/javascript-generator/"
tags: ["javascript", "generator", "yield"]
summary: "Generator Function는 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있으며, 내부 상태를 관리할 수 있는 함수이며, function* generatorFunction() { /* ... */ }와 같이 사용한다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## Generator Function
`Generator Function`는 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있으며, 내부 상태를 관리할 수 있는 함수이며, `function* generatorFunction() { /* ... */ }`와 같이 사용한다.

단 한 번의 실행으로 함수의 끝까지 실행이 완료되는 일반 함수와는 달리,<br />
제너레이터 함수는 사용자의 요구에 따라 (`yield`와 `next`를 통해) 일시적으로 정지될 수도 있고, 다시 시작될 수도 있다.<br />
또한, 제너레이터 함수의 반환으로는 제너레이터가 반환된다.

## Generator
`Generator`는 이 제너레이터 함수의 반환으로 iterable 프로토콜과 iterator 프로토콜을 따르는 객체이다.<br />
이 때, 제너레이터의 이터러블에서 반환하는 이터레이터는 자기 자신이다.

```js
function* generatorFunction() {
  yield 42;
}

const generator = generatorFunction();

generator === generator[Symbol.iterator]();

// 이 말인 즉슨, 제너레이터의 이터러블은 다음과 같은 방식으로 구현되어 있을 거라는 것을 암시한다.
// generator[Symbol.iterator] = () => this;
```

## yield / next
`yield`는 제너레이터 함수의 실행을 일시적으로 정지시키며, `yield` 뒤에 오는 표현식은 제너레이터의 caller에게 반환된다.<br />
즉, 일반 함수의 `return`과 매우 유사하다고 볼 수 있다.

여기서 제너레이터 함수는 Callee이고, 이를 호출하는 함수가 Caller이며, Caller는 Callee의 `yield` 부분에서 다음 statement로 진행을 할 지 여부를 제어한다. 이는 `next`로 인해 재개될 수 있다.

`yield`와 `next`의 관계를 보고 이러한 의문이 생길 수 있다. `모든 yield를 처리하기 위해 그만큼의 next를 사용해야 하나?`<br />
그럴 수도 있고, 아닐 수도 있다.

`next`를 일일이 호출하지 않고, programmitically하게 호출하게 하려면, 다음과 같이 재귀 호출을 하면 된다.<br />
아래 예제 코드는 홀수는 그대로 출력을 하고, 짝수에는 `1`을 더하여 출력하는 Runner이다.

```js
function* sampleGFunction() {
  console.log(yield 10);
  console.log(yield 5);
  console.log(yield 0);
}

function run(gen) {
  const it = gen();

  (function iterate({ value, done }) {
    if (done) {
      return value;
    }

    if (value % 2 === 0) {
      iterate(it.next(value + 1));
    } else {
      iterate(it.next(value));
    }
  })(it.next());
}

run(sampleGFunction);
// 11
// 5
// 1
```

## 제너레이터 함수에서의 return
`return`은 수행되고 있는 이터레이터를 종료시키며, `return` 뒤에 오는 값은 `IteratorResult` 객체의 `value` 프로퍼티에 할당되며, `done` 프로퍼티는 `true`가 할당된다.

```js
function* sampleGFunction() {
  return 42;
}

const generator = sampleGFunction();
console.log(generator.next()); // { value: 42, done: true }
```

## 제너레이터 종료하기
제너레이터에는 `next` 외에도 `throw`, `return` 등의 메소드가 있는데, 이 `return`과 `throw`를 통해 제너레이터를 종료할 수 있다. 다만, 이 둘은 조금의 차이가 있다.

### return
```js
function* increment() {
  console.log('[ENTERED]');
  let i = 0;

  try {
    while (true) {
      yield i++;
    }
  } catch (e) {
    console.log('[ERROR]', e);
  }
}

const withReturn = increment();
console.log(withReturn.next());
console.log(withReturn.next());
console.log(withReturn.next());
console.log(withReturn.next());
console.log(withReturn.return(42));

// [ENTERED]
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 42, done: true }
```

`return`이 호출되고 나면, `value`에는 `return`의 인자가 할당되고, `done`은 `true`가 된다.

### return with try/finally
`return`메소드가 호출되었을 때 제너레이터 함수의 코드가 `try / finally` 안에 있으면, 시퀸스가 종료되지 않는다.<br />
`return` 이후 `finally`블록의 `yield` 표현식이 실행되며, 시퀸스는 결국 `return`에 전달된 값으로 종료된다.

```js
function* oneToX() {
  yield 1;

  try {
    yield 2;
  } finally {
    yield 3;
    yield 4;
  }

  yield 5;
}

var withReturnWithFinally = oneToX();

console.log(withReturnWithFinally.next()); // { value: 1, done: false }
console.log(withReturnWithFinally.next()); // { value: 2, done: false }
console.log(withReturnWithFinally.return(6)); // { value: 3, done: false }
console.log(withReturnWithFinally.next()); // { value: 4, done: false }
console.log(withReturnWithFinally.next()); // { value: 6, done: true }
```

### throw
```js
const withThrow = increment();

console.log(withThrow.next());
console.log(withThrow.next());
console.log(withThrow.next());
console.log(withThrow.next());
console.log(withThrow.throw(-1));

// [ENTERED]
// { value: 0, done: false }
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }
```

`throw`가 호출되고 나면, `catch` 블록에 `throw`의 인자가 전달된다.

### throw with yield
```js
function* decrement() {
  console.log('[ENTERED]');
  let i = 0;

  try {
    while (true) {
      yield i--;
    }
  } catch (e) {
    yield e;
  }
}
const withThrowWithYield = decrement();

console.log(withThrowWithYield.next());
console.log(withThrowWithYield.next());
console.log(withThrowWithYield.next());
console.log(withThrowWithYield.next());
console.log(withThrowWithYield.throw(Infinity));
console.log(withThrowWithYield.next());

// [ENTERED]
// { value: 0, done: false }
// { value: -1, done: false }
// { value: -2, done: false }
// { value: -3, done: false }
// { value: Infinity, done: false }
// { value: undefined, done: true }
```

`catch`에서 `yield`를 사용하게 되면, `next`를 `n` 번 더 사용할 때까지 이터레이터는 끝나지 않는다.

## yield*
`yield`에 `*`를 붙여 사용하게 되면, `yield*`와 함께 표현된 이터러블 객체를 순회하게 된다.
```js
function* iterableYield() {
  const a = 1;
  yield a;
  yield* [1, 2, 3].map(el => el * (10 ** a));

  const b = 2;
  yield b;
  yield* [1, 2, 3].map(el => el * (10 ** b));

  const c = 3;
  yield c;
  yield* [1, 2, 3].map(el => el * (10 ** c));
}

function run(gen) {
  const it = gen();

  (function iterate({ value, done }) {
    console.log({ value, done });
    if (done) {
      return value;
    }

    iterate(it.next(value));
  })(it.next());
}

run(iterableYield);
// { value: 1, done: false }
// { value: 10, done: false }
// { value: 20, done: false }
// { value: 30, done: false }
// { value: 2, done: false }
// { value: 100, done: false }
// { value: 200, done: false }
// { value: 300, done: false }
// { value: 3, done: false }
// { value: 1000, done: false }
// { value: 2000, done: false }
// { value: 3000, done: false }
// { value: undefined, done: true }
```

## 다른 Generator Function에 컨텍스트 위임하기
제너레이터는 앞서 살펴본 `yield*`를 통해 다른 제너레이터 함수를 실행할 수 있다.
이 때, 아래 예제에서 `innerGenerator` 를 호출하면 객체가 반환되지만, 실제로 `innerGenerator`가 실행되지는 않는다.

```js
function* innerGenerator() {
  yield* ['a', 'b', 'c'];
}

function* generator() {
  yield* [1, 2, 3];
  const innerGen = innerGenerator(); // Did nothing
  console.log(innerGen);
  yield* innerGenerator();
}

[...generator()];
// [1, 2, 3, 'a', 'b', 'c']
```

## Iterable한 Generator
여기까지의 설명으로 보아 제너레이터는 이터러블한 것을 알 수 있을 것이다.<br />
따라서, `for..of` 반복문을 통해 제너레이터를 순회할 수 있으며, `...` 연산자를 사용할 수도 있다.

```js
function* generateName() {
  yield 'W';
  yield 'O';
  yield 'N';
  yield 'I';
  yield 'S';
  yield 'M';
}

// for..of
const genForForOf = generateName();
for (let i of genForForOf) {
  console.log(i);
}
// W
// O
// N
// I
// S
// M

// ...
const genForSpread = generateName();
console.log([...genForSpread]); // ['W', 'O', 'N', 'I', 'S', 'M']
```

## 기타
제너레이터를 사용한 라이브러리는 [TJ](http://github.com/tj)의 [co](https://github.com/tj/co), Node.js의 프레임워크 중 하나인 [Koa](https://koajs.com/), 비동기 처리를 위한 리덕스 미들웨어인 [Redux Saga](https://github.com/redux-saga/redux-saga) 등이 있다.

## 참고
- [MDN : Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
- [Exploring JS: Generators](http://exploringjs.com/es6/ch_generators.html)
