---
title: "Function 객체의 apply, bind, call"
date: "2017-08-28T20:49:39.000Z"
path: "/apply-bind-call/"
tags: ["javascript", "apply", "bind", "call", "this"]
summary: ".apply(), .bind(), .call() 는 일급 객체인 Function 의 메소드로 함수에 this 를 바꿔준다. (즉, 이 메소드들을 통해 호출된 함수의 스코프를 변경하는 것과 같다.)"
category: "JavaScript"
images: ["images/js.jpg"]
---

`.apply()`, `.bind()`, `.call()`는 일급 객체인 `Function`의 메소드로 함수의 `this`를 바꿔준다. (즉, 이 메소드들을 통해 호출된 함수의 스코프를 변경하는 것과 같다.)

## apply
`.apply()` 메소드는 주어진 `this`값과 `arguments`혹은 `array`로 함수를 호출한다. (`arguments`는 유사배열 객체로 `.length`등의 `property`가 있다.)
```js
function personContainer() {
  const person = {
    personName: 'Jaewon',
    say: function() {
      return `${ this.personName } says ${ arguments[1] }`;
    },
  };

  person.say.apply(person, arguments); // arguments[0] : Hi, arguments[1] : Hello
}

personContainer('Hi', 'Hello'); // Jaewon says Hello
```

## call
`.apply()`와 유사하지만, `.call()` 은 (유사)배열 대신, 값들을 하나하나 전달하여 함수를 호출한다.
```js
const john = {
  personName: 'John',
};

const person = {
  personName: 'Jaewon',
  say: function (str) {
    return `${this.personName} says ${ str }.`;
  },
};

person.say.call(john, 'Hello'); // 'John says Hello.'
person.say.call(person, 'Hello'); // 'Jaewon says Hello.'
```

## bind
`.bind()`는 호출될 때 인자로 전달된 객체를 `this`로 하는 함수를 반환한다. 즉, 함수가 가리키는 `this`를 바꾼다고 봐도 된다.<br />
(함수 안에서 `this`는 해당 함수를 호출한 객체이다.)
```js
const obj = { num: 5, };
this.num = 42;

function power() {
  return this.num ** 2;
}

power(); // 1764
power.bind(obj)(); // 25
```

아래 예제에서는 객체의 메소드를 일반 함수로 추출한 뒤, 이 함수의 실행 컨텍스트를 알아볼 수 있는 코드다.

```js
const person = {
  personName: 'Jaewon',
  say: function (str) {
    console.log(typeof this.personName, this.personName, this);
    return `${ this.personName } says ${ str }.`;
  },
};

const func = person.say;
func('Hello');
// 'undefined says Hello'
// 'undefined' undefined window

const func2 = person.say.bind(person);
func2('Hello');
// 'Jaewon says Hello'
// 'string' Jaewon { personName: 'Jaewon', say: function }
```

`func`의 `this`는 `window`이기 때문에 `this.personName`은 `undefined`이다.

## 참고
- [MDN : apply](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
- [MDN : call](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/call)
- [MDN : bind](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)
