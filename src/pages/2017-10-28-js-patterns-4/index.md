---
title: "자바스크립트 패턴 - 4"
date: "2017-10-28T23:58:29.000Z"
path: "/js-pattern-4/"
tags: ["javascript", "pattern", "design pattern", "디자인패턴", "iterator", "반복자"]
summary: "반복자 패턴은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다. 반복자 패턴을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다."
category: "JavaScript"
---

## Iterator
`반복자 패턴`은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다.<br />
`반복자 패턴`을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다.

## 구현
`Iterator` 객체는 컬렉션 및 현재 위치에 대한 참조를 관리하며, `first`, `current`, `next`, `hasNext`, `reset`, `each`같은 메소드를 제공한다.
`반복자 패턴`에서는 특히 `next`메소드가 중요한데, `next()`를 호출하면 다음 순서의 요소를 반환하게 된다.

```js
function Iterator(items) {
  this.index = 0;
  this.items = items;
}

Iterator.prototype = {
  // 맨 처음 요소를 가져온다.
  first: function first() {
    this.reset();
    return this.next();
  },
  // 현재 요소를 가져온다.
  current: function current() {
    return {
      done: false,
      value: this.items[this.index],
    };
  },
  // 현재 요소를 가져오며, 다음 호출 시 다음 값을 가져오게 된다.
  next: function next() {
    const value = this.items[this.index++];

    if (this.hasNext()) {
      return {
        done: false,
        value,
      };
    }

    return { done: true };
  },
  // 다음 요소가 있는지 확인한다.
  hasNext: function hasNext() {
    return this.index <= this.items.length;
  },
  // 첫 요소를 가리키게 한다.
  reset: function reset() {
    this.index = 0;
  },
  // 객체를 순회하며 인자로 받은 함수를 실행하도록 한다.
  each: function each(callback) {
    for (let item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  },
};

const items = ['one', 2, '삼', '4'];
const iterable = new Iterator(items);

while (iterable.hasNext()) {
  console.log(iterable.next());
  // { done: false, value: 'one' }
  // { done: false, value: 2 }
  // { done: false, value: '삼' }
  // { done: false, value: '4' }
  // { done: true }
}

iterable.first(); // { done: false, value: 'one' }

iterable.each(console.log);
// { done: false, value: 'one' }
// { done: false, value: 2 }
// { done: false, value: '삼' }
// { done: false, value: '4' }
```

## 정리
이처럼 `반복자 패턴`을 사용하면, 다양한 메소드를 통해 데이터에 쉽고 편리하게 접근할 수 있다.

다음엔 [장식자 패턴](/js-pattern-5)에 대해 알아보겠다.
