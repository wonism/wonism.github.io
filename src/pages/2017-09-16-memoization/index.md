---
title: "Memoization에 대해"
date: "2017-09-16T00:04:07.000Z"
path: "/memoization/"
tags: ["javascript", "memoization", "functional programmin"]
summary: "Memoization은 매번 함수를 다시 계산하는 대신 함수의 값을 저장하는 기술로 연산 결과를 저장하는 객체를 사용함으로써 불필요한 작업을 피할 수 있다."
---

`Memoization`은 매번 함수를 다시 계산하는 대신 함수의 값을 저장하는 기술로 연산 결과를 저장하는 객체를 사용함으로써 불필요한 작업을 피할 수 있다.<br />
즉, 메모는 함수를 위한 캐싱 기법이라고 할 수 있다.<br />
메모이제이션은 주어진 입력에 대해 항상 동일한 출력을 반환하는 알고리즘에 한해 사용된다. (e.g. `Fibonacci`, `Factorial`)

## 피보나치 수열
피보나치 수열의 `n`번째 값을 구하는 함수는 다음과 같다.

```js
const fibonacci = n =>
  n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
```

만약 이 함수가 여러 번 실행된다면, 이 함수는 수없이 호출되어야 한다.

```js
for (let i = 0; i <= 10; i++) {
  console.log(`${i} : ${fibonacci(i)}`);
}

// 직접 호출한 횟수 11 번
// 이미 계산한 값들을 다시 계산하기 위해 호출된 횟수 11 번
// 총 453 번 호출
```

## 피보나치 수열과 메모이제이션
만약 메모이제이션을 적용한다면 작업량을 엄청나게 줄일 수 있다.

```js
const fibonacci = (() => {
  const memo = [0, 1];

  const fn = (n) => {
    let result = memo[n];

    if (typeof result !== 'number') {
      result = fn(n - 1) + fn(n - 2);
      memo[n] = result;
    }

    return result;
  };

  return fn;
})();

for (let i = 0; i <= 10; i++) {
  console.log(`${i} : ${fibonacci(i)}`);
}

// 직접 호출한 횟수 11번
// 앞선 메모이제이션 결과를 얻기 위해 호출한 18번
// 총 29번 호출
```

## 메모이제이션 함수의 구현
재귀함수를 `memoize`할 수 있도록 해주는 함수를 만들어 보겠다.<br />
(이 함수는 예시일 뿐이며, 얼마든지 커스터마이즈할 수 있다.)<br />

#### 구현 전략
1. 첫 번째 인자로는 결과를 저장할 배열을 받으며, 두 번째 인자로는 메모이즈할 함수를 받는다.
2. 반환 값은 함수이며, 구하고자 하는 값이 메모에 없으면 해당 함수를 실행하여 값을 계산한 뒤 메모에 해당 값을 저장한다.

```js
const memoizer = (memo, fn) => {
  const calc = (n) => {
    let result = memo[n];

    if (typeof result !== 'number') {
      result = fn(calc, n);
      memo[n] = result;
    }

    return result;
  }

  return calc;
}
```

구현된 함수는 위와 같으며, `fibonacci`와 `factorial`을 `memoizer`함수를 통해 메모이제이션할 수 있다.

#### 피보나치와 팩토리얼의 메모이제이션
```js
const fibonacci = memoizer([0, 1], (calc, n) => {
  return calc(n - 1) + calc(n - 2);
});

const factorial = memoizer([1, 1], (calc, n) => {
  return n * calc(n - 1);
});
```

#### 성능 확인
위에서 구현한 `fibonacci`함수를 통해 성능을 측정해보겠다.
```js
console.time('fibonacci - 1');
fibonacci(10);
console.timeEnd('fibonacci - 1');
// fibonacci - 1: 0.076904296875ms

console.time('fibonacci - 2');
fibonacci(10);
console.timeEnd('fibonacci - 2');
// fibonacci - 2: 0.005126953125ms
```

## 주의할 점
1. 메모이즈된 함수는 오래된 결과를 저장하기 때문에 메모리를 추가적으로 소비하게 된다.
2. 실행 속도가 빠르거나 자주 실행되지 않는 함수의 경우 실용적이지 않을 수 있다.
3. 부작용이 없는 순수 함수에만 적용될 수 있다.

## 관련 라이브러리 및 데코레이터
- [ES 2016 decorators](https://github.com/developit/decko#memoize)
- [Lodash](https://github.com/lodash/lodash/blob/master/memoize.js)
- [Ramda](https://github.com/ramda/ramda/blob/master/src/memoize.js)
- [Reselect](https://github.com/reactjs/reselect)
