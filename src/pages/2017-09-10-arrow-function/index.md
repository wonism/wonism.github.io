---
title: "화살표 함수에 대해서"
date: "2017-09-10T11:03:12.000Z"
path: "/arrow-function/"
tags: ["javascript", "arrow function", "es2015", "this", "lambda"]
summary: "화살표함수는 ES2015에서 사용할 수 있는 함수 표현식으로 익명함수를 축약하여 표현할 수 있다."
---

`화살표함수`는 `ES2015`에서 사용할 수 있는 함수 표현식으로 익명함수를 축약하여 표현할 수 있다. 이 화살표함수는 편리하면서도 특이한 성질이 있는데, 이에 대해 알아보겠다.

## 표현식
`ES2015`에서는 익명함수를 `=>`로 축약하여 나타낼 수 있다. 함수 표현식에 비하면 구문이 상당히 짧다.
```js
/* Function expression */
function square(n) {
  return n * n;
}

/* Arrow function */
const square = n => {
  return n * n;
}

/* Arrow function without block */
const square = n => n * n;
// 블록을 사용하지 않는다면, return을 생략한채로 값을 반환할 수 있다.

/* Arrow function with multiple parameters */
const power = (n, e) => n ** e;
// 여러 개의 인자를 사용할 떄에는 파라미터들을 ()로 묶어줘야 한다.

/* Arrow function returns simple object */
const createObj = n => ({
  number: n,
});
// 단순 객체를 반환하기 위해서는 객체 리터럴을 ()로 묶어줘야 한다.
```

## 화살표 함수와 this
화살표 함수는 자기 고유의 `this`값을 갖지 않으며, `this`는 화살표 함수를 감싸는 외부 스코프로부터 계승받는다.<br />
다음 코드는 함수 표현식과 비교한 예제이다.

```js
function Timer() {
  this.passedTime = 0;

  setInterval(function () {
    this.passedTime++;
  }, 1000);
}

const t1 = new Timer();
// 1초마다 t를 확인해보면, passedTime은 0이다.
// setInterval의 인자인 함수 안에 있는 this는 Timer의 생성자에 의해 생성되기 때문이다.

// 이를 제대로 동작하게 하기 위해선 this 객체를 다른 변수에 등록하여 사용하거나,
function Timer() {
  const that = this;

  that.passedTime = 0;
  setInterval(function () {
    that.passedTime++;
  }, 1000);
}

const t2 = new Timer();

// bind 메소드를 통해 Timer의 this를 바인딩한다.
function Timer() {
  this.passedTime  = 0;

  setInterval((function () {
    this.passedTime++;
  }).bind(this), 1000);
}

const t3 = new Timer();

// this를 바인딩하거나, 참조하는 변수를 사용하는 방식대신,
// 화살표 함수를 사용하면, 훨씬 간편하다.
function Timer() {
  this.passedTime = 0;

  setInterval(() => {
    this.passedTime++;
  }, 1000);
}

const t4 = new Timer();
```

## 화살표 함수와 arguments
화살표함수에서는 `arguments`를 사용할 수 없다.<br />
일반적인 함수 표현식에서는 전달받은 인자를 `arguments`라는 유사배열로써 접근할 수 있었지만, 화살표 함수에서는 이를 사용할 수 없다.<br />
이와 같은 기능을 사용하고 싶다면, `spread operator`를 사용해야 한다.

```js
// Function expression
function func() {
  for (let i = 0, len = arguments.length; i < len; i++) {
    console.log(arguments[i]);
  }
}

func(1, 2, 3); // 1, 2, 3

// Arrow function
const func2 = () => {
  for (let i = 0, len = arguments.length; i < len; i++) { // Throw error when execute this function
    console.log(arguments[i]);
  }
};

// func2(1, 2, 3);

// Arrow function with rest parameters
const func3 = (...args) => {
  for (let i = 0, len = args.length; i < len; i++) {
    console.log(args);
  }
};

func3(1, 2, 3); // 1, 2, 3
```
