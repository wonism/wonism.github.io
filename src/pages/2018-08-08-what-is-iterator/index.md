---
title: "JavaScript iterables와 iterator 이해하기"
date: "2018-08-08T00:28:31.000Z"
path: "/javascript-iteration-protocol/"
tags: ["javascript", "iterator", "iterables"]
summary: "Iteration 프로토콜에는 두 가지 프로토콜이 있다. 한 가지는 iterable 프로토콜이고 또 다른 한 가지는 iterator 프로토콜이다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## Iteration
Iteration 프로토콜에는 두 가지 프로토콜이 있다. 한 가지는 `iterable` 프로토콜이고 또 다른 한 가지는 `iterator` 프로토콜이다.<br />
ES2015에서 추가된 이 두 가지는 새로운 빌트인 혹은 구문이 아닌 프로토콜 즉, 규약이다. 이들은 같은 규칙을 준수하는 객체에 의해 구현될 수 있다.

## Iterables
`iterable` 프로토콜은 반복 가능한 객체를 나타내는 프로토콜로 `for..of` 등에서 반복되는 행동을 정의하는 객체를 `반복 가능`하다고 한다.<br />
반복 가능한 객체로는 내장 객체인 `Array`, `Map`, `Set`, `String` 등이 있다. 또한, `[Symbol.iterator]`라는 키를 가진다.

```js
// example of usage
const iterator = [1, 2, 3][Symbol.iterator]();

iterator.next().value; // 1
iterator.next().value; // 2
iterator.next().value; // 3
iterator.next().done; // true
```

반복가능한 객체를 만들기 위해서는 `[Symbol.iterator]`라는 키에 `next`라는 메소드를 가지는 객체를 반환하는 함수를 할당한다. 이 때, 이 함수의 반환 값은 `value` 프로퍼티를 가진 객체이다.

```js
const obj = {
  [Symbol.iterator]: () => {
    let i = 0;

    return {
      next: () => { value: i++ },
    };
  },
};

for (let v of iterator) { // Infinity loop
  console.log(v);
}
```

하지만, 이런 경우는 시퀸스가 무한하기 때문에 `for..of` 루프 사용 시 조건문을 사용해야 한다.

## Iterator
`iterator` 프로토콜은 반복 가능한 객체의 값을 시퀸스대로 처리하는 프로토콜로 다음은 반복자에 대한 설명이다.

1. 컬렉션 내의 항목에 대해 한 번에 하나씩 접근하면서 현재의 위치를 추적하는 방법을 알고 있는 객체
2. 반복 가능 인터페이스에 의해 반환되는 객체

반복자 객체는 `next` 메소드를 통해 다음 시퀸스를 진행하게 된다. 이 메소드는 위에서 살펴본 대로 `value`와 `done`을 가진 객체를 리턴한다.

```js
const obj = {
  [Symbol.iterator]: () => {
    let i = 0;

    return {
      next: () => { value: i++ },
    };
  },
};

const iterator = obj[Symbol.iterator]();

iterator.next().value; // 0
iterator.next().value; // 1
// ...
```

## 참고
- [MDN : Iteration protocols](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols)
