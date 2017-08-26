---
title: "bind 메소드 간단하게 구현하기"
date: "2017-08-27T02:28:39.000Z"
path: "/implement-bind/"
tags: ["javascript", "bind", "this", "object", "function"]
---

.bind()는 호출될 때 인자로 전달된 객체를 this로 하는 함수를 반환하며, 다음과 같이 사용한다.

## bind란?
`.bind()`는 호출될 때 인자로 전달된 객체를 `this`로 하는 함수를 반환하며, 다음과 같이 사용한다.

```js
(function () {
  console.log(this.num);
}).bind({ num: 42 })();
```

## 뼈대
`Function.prototype.bind()`는 인자로 넘겨받은 객체를 `this`로 하는 함수를 반환한다.<br />
즉, 함수를 리턴하게 된다.

```js
Function.prototype.bindImplementation = function (obj) {
  /* ... */

  return function () {
    /* ... */
  };
}
```

## 실제 구현
`Function.prototype.bind()`는 어떤 함수가 가리키는 `this`를 원하는 객체로 변환한다.<br />
즉, 어떤 함수를 실행할 때, 이 함수의 `this`를 원하는 객체로 변환하기 위해 `apply`메소드를 사용하며, 첫 번째 인자로 `bind`의 인자를 전달해준다.<br />
이 때, 인자가 넘어오지 않으면 해당 함수의 `this`를 사용한다.

```js
Function.prototype.bind = function (obj) {
  if (!obj) {
    return this;
  }

  var that = this;

  return function () {
    return that.apply(obj, arguments);
  };
};
```

이를 ES2015 문법으로 구현하면, 더 간단하다.

```js
Function.prototype.bind = function (obj) {
  if (!obj) {
    return this;
  }

  return (...args) => this.apply(obj, args);
};
```
