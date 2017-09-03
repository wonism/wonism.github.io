---
title: "Async / Await"
date: "2017-09-03T23:52:32.000Z"
path: "/async-await/"
tags: ["javascript", "async", "await", "callback", "promise", "es2017"]
---

ES2017(ECMA-262)에서 새롭게 추가된 async/await는 비동기 함수를 처리하기 위한 키워드이다. 처음 제안된 것은 TypeScript 1.7였다.  또한, async/await는 Promise위에 구축되었고, 기존의 모든 프로미스 기반 API와 호환되기 때문에 프로미스와 같이 사용하거나, 프로미스를 대체할 수 있다.

`ES2017(ECMA-262)`에서 새롭게 추가된 `async/await`는 비동기 함수를 처리하기 위한 키워드이다.<br />
처음 제안된 것은 [TypeScript 1.7](https://blogs.msdn.microsoft.com/typescript/2015/11/30/announcing-typescript-1-7/)였다.<br />
또한, `async/await`는 `Promise`위에 구축되었고, 기존의 모든 프로미스 기반 API와 호환되기 때문에 프로미스와 같이 사용하거나, 프로미스를 대체할 수 있다.<br />
비동기 동작을 위한 동기식 구문을 제공함으로써 코드 가독성을 높일 수 있으며, 에러 핸들링을 위해 `try/catch`를 사용한다.

## 시작하기 전에
`async`와 `await`는 키워드이므로 `polyfill`이 없으며, 이전 브라우저를 지원하려면, `babel` 등 트랜스파일러를 사용해야 한다.<br />
사용하는 브라우저가 `async`, `await`를 지원하는지 확인하려면, [Can I use?](http://caniuse.com/)에서 해당 키워드를 검색하면 된다.

## 예제 코드를 통해 async/await 살펴보기
```js
function willBeAwaited() {
  return new Promise(function (resolve) {
    setTimeout(resolve, 400, 42);
  });
}

async function asyncFunc () {
  const resolvedValue = await willBeAwaited();
  console.log(resolvedValue);

  return resolvedValue + 500;
}

asyncFunc()
  .then(function (resolvedValue) {
    console.log(resolvedValue);
  });

// 42
// 542
```

`async`키워드는 일반적인 함수를 자동으로 프로미스 형태로 만들며, `async`함수를 호출하면 해당 함수가 무엇을 반환하든 `resolve`된다. 또한, `async` 함수는 `await`의 사용을 가능하게 한다.<br />
`await`키워드는 프로미스 객체와 작동하며, 함수의 호출 앞에 사용되면 프로미스가 해결될 때까지 코드 실행을 중단하게 한다. `await`는 오직 `async`함수와 사용될 수 있다.

`asyncFunc`를 일반 프로미스 스타일로 재작성하면, 다음과 같다.

```js
function asyncFunc() {
  return willBeAwaited()
    .then((resolvedValue) => {
      console.log(resolvedValue);

      return resolvedValue + 500;
    });
}
```

## 에러 핸들링
프로미스는 해결(`resolve`)될 수도 있고, 거절(`reject`)될 수 있으며, 거절된다면 프로미스 객체의 `Promise.prototype.catch`메소드를 통해 처리한다.<br />
`async/await`의 경우에는 `try { ... } catch { ... }`를 사용한다.

```js
function willBeAwaited() {
  return new Promise(function (resolve, reject) {
    setTimeout(reject, 400, 'Error occured!');
  });
}

async function asyncFunc () {
  try {
    const resolvedValue = await willBeAwaited();
    console.log(resolvedValue);

    return resolvedValue + 500;
  } catch (e) {
    console.log(e);

    return 'Error occured when \'willBeAwaited\' is executed';
  }
}

asyncFunc()
  .then(function (resolvedValue) {
    console.log(resolvedValue);
  });

// Error occured!
// Error occured when 'willBeAwaited' is executed
```

만약, `async` 함수에서 거절된 프로미스를 반환하려면 `throw`를 통해 에러를 던지면 된다.

```js
function willBeAwaited() {
  return new Promise(function (resolve, reject) {
    setTimeout(reject, 400, 'Error occured!');
  });
}

async function asyncFunc () {
  try {
    const resolvedValue = await willBeAwaited();
    console.log(resolvedValue);

    return resolvedValue + 500;
  } catch (e) {
    console.log(e);

    throw new Error(e);
  }
}

asyncFunc()
  .then(function (resolvedValue) {
    console.log(resolvedValue);
  })
  .catch(function (e) {
    console.log(e);
  });

// Error occured!
// Error occured!
```

## async/await의 한계
*1. `async`가 없이는 `await`를 사용할 수 없다.*

전역 스코프나 일반 함수 스코프 안에서 `await`를 직접 사용할 수 없음을 의미한다.

```js
async function one() {
  return 1;
}

// const num = await one();
// can not be executed

async function main() {
  const num = await one();
  console.log(num);
}

main();
```

*2. `Promise.all`과 같은 경우를 대체할 수 없다.*

모든 비동기 호출이 끝날 때까지 기다려야 하는 경우, `Promise.all`을 사용하는 것이 훨씬 좋다.

```js
function sleep(ms = 0) {
  return new Promise(resolve => setTimeout(function () {
    resolve(ms);
  }, ms));
}

(async function awaitAyncFunctions() {
  const start = Date.now();

  await sleep(1000);
  await sleep(3000);
  await sleep(2000);

  const end = Date.now();

  console.log(`execution time is ${Math.round((end - start) / 1000)}seconds.`);
  // execution time is 6seconds.
})();

(async function awaitAyncFunctions() {
  const start = Date.now();

  const results = await
  Promise.all([sleep(1000), sleep(3000), sleep(2000)]);

  const end = Date.now();

  console.log(`execution time is ${Math.round((end - start) / 1000)}seconds.`);
  // execution time is 3seconds.
})();
```

## 참고
- [MDN : async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN : await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
