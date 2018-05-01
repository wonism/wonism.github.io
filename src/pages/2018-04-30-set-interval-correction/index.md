---
title: "setInterval과 싱글 스레드 그리고 시간 보정"
date: "2018-04-30T19:17:16.000Z"
path: "/set-interval-correction/"
tags: ["javascript", "setinterval", "settimeout", "interval",
"correction"]
summary: "setInterval을 사용하면, 일정한 주기로 반복적인 함수를 실행할 수 있다. 사용 방법은 setInterval(function callback () {}, interval.ms)과 같이 사용하며, 두번째 인자는 ms단위이다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## setInterval
`setInterval`을 사용하면, 일정한 주기로 반복적인 함수를 실행할 수 있다.<br />
사용 방법은 `setInterval(function callback () {}, interval.ms)`과 같이 사용하며, 두번째 인자는 `ms`단위이다.<br />
예를 들어 다음과 같은 코드는 1초에 한 번씩 `Hello, Interval!`이란 문자열을 출력한다.<br />

```js
const hello = setInterval(() => { console.log('Hello, Interval'); }, 1000);
```

`setInterval`을 실행함으로써 반환되는 값은 자연수(`Number` 타입)이며, 일종(一種)의 프로세스 아이디(pid)라고 봐도 무방하다.<br />
이 값은 `clearInterval(pid)`로 인터벌을 중지하고자 할 때 사용된다.

## setInterval과 싱글 스레드
자바스크립트는 싱글 스레드를 사용하기 때문에 이벤트 루프 기반의 동시성 지원을 한다.<br />
이로 인해 `setInterval`은 (`setTimeout`도 마찬가지이다.) 약간의 지연이 발생한다.

다음 예제 코드를 실행하고, 그 결과를 보겠다.<br />
(크롬 브라우저(65.0.3325.181 사용 중)에서는 내부적으로 보정이 들어가기 때문에 파이어폭스에서 실행을 한 결과를 첨부했다.)

```js
const start = Date.now();

setInterval(() => {
  console.log(`${Date.now() - start}ms`);
}, 1000);

// 1001ms
// 2002ms
// 3003ms
// 4004ms
// 5005ms
// 6009ms
// 7009ms
// 8010ms
// 9013ms
// 10016ms
```

## setInterval 보정하기
```js
const setCorrectedInterval = ((callback, delay) => {
  let startTime;
  let count = 0;

  const tick = (cb, dl) => {
    if (!count) {
      startTime = Date.now();
      isStarted = true;
      count++;

      setTimeout(() => { tick(cb, dl); }, dl);
    } else {
      const delayed = (Date.now() - startTime);
      const correction = (delay * count) - delayed;

      callback();
      count++;

      setTimeout(() => { tick(cb, dl + correction); }, dl + correction);
    }
  }

  return tick(callback, delay);
});

const now = Date.now();
setCorrectedInterval(() => { console.log(Date.now() - now); }, 1000);
```

시간 보정을 위해 클로저 구문 안에 `startTime`, `count` 등의 지역 변수를 선언한다.

함수가 처음 시작되면 첫 번째 인자인 콜백 함수를 즉시 시작하는게 아니라,
`setTimeout`에 내부 함수와 인터벌값을 인자로 전달한다.<br />
두 번째 부터는 지연된 시간과 콜백 함수를 실행하고자 하는 시간의 갭을 구한 뒤,
내부 함수에서 전달받은 2번째 인자와 더하여 시간을 보정하며,
`setInterval`을 호출하며 콜백함수를 인터벌로 반복하도록 한다.

## setCorrectedInterval을 비우기 위한 clearCorrectedInterval
`setInterval`이나 `setTimeout`처럼 `id`값을 반환하도록하며,
조건문을 통해 `clear`되지 않은 인터벌들만 실행하도록 한다.<br />
아이디들을 저장할 객체 `intervals`는 `setCorrectedInterval`과 같은 스코프에 생성하며, 각 아이디들은 `setTimeout`의 아이디와 맵핑된다.

```js
let intervalId = 0;
const intervals = {};

const setCorrectedInterval = ((callback, delay) => {
  let startTime;
  let count = 0;
  let id = intervalId++;

  const tick = (cb, dl) => {
    if (!count) {
      startTime = Date.now();
      isStarted = true;
      count++;

      intervals[id] = setTimeout(() => { tick(cb, dl); }, dl);
    } else {
      const delayed = (Date.now() - startTime);
      const correction = (delay * count) - delayed;

      callback();
      count++;

      if (intervals[id]) {
        intervals[id] = setTimeout(() => { tick(cb, dl + correction); }, dl + correction);
      }
    }
  }

  tick(callback, delay);

  return id;
});

const clearCorrectedInterval = (id) => {
  clearTimeout(intervals[id]);
  delete intervals[id];
};
```
