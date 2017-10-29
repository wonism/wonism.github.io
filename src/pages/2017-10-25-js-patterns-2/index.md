---
title: "자바스크립트 패턴 - 2"
date: "2017-10-25T22:47:51.000Z"
path: "/js-pattern-2/"
tags: ["javascript", "pattern", "design pattern", "디자인패턴", "factory", "팩토리"]
summary: "공장의 역할은 물건을 생산하는 것이다.  프로그래밍에서도 같은 일을 수행한다. 프로그래밍에서의 팩토리는 객체들을 생성한다."
category: "JavaScript"
---

## Factory
`공장`의 역할은 `물건`을 `생산`하는 것이다.<br />
프로그래밍에서도 같은 일을 수행한다. 프로그래밍에서의 `팩토리`는 `객체`를 `생성`한다.

팩토리 패턴은 클래스 내부나 클래스의 스태틱 메소드로 구현되는데,
객체를 생성하는 부분을 서브 클래스에 위임한다고 볼 수 있다.

## 팩토리가 하는 일
팩토리가 하는 일은 다음과 같다.

- 비슷한 객체를 생성하는 반복 작업 수행한다.
- 구체적인 타입을 몰라도 객체를 생성할 수 있게 한다.
(자바스크립트에서는 강타입 언어가 아니기 때문에 두 번째 일을 쉽게 구현할 수 있다.)

`팩토리`의 가장 대표적인 예제는 `Object`이다.<br />
전달받은 값에 따라 다른 객체를 생성한다.

```js
const num = new Object(42);
const str = new Object('abc');
const bool = new Object(true);
const obj = new Object({});
const arr = new Object([1, 2, 3]);
const reg = new Object(/\w/);

num.constructor.name; // Number
str.constructor.name; // String
bool.constructor.name; // Boolean
obj.constructor.name; // Object
arr.constructor.name; // Array
reg.constructor.name; // RegExp
```

## 구현
```js
function Factory() {
  this.createEmployee = function createElement(type) {
    let employee;

    if (type === 'fulltime') {
      employee = new FullTime();
    } else if (type === 'parttime') {
      employee = new PartTime();
    } else if (type === 'manager') {
      employee = new Manager();
    } else {
      throw new Error(`${type} does not exist.`);
    }

    employee.type = type;
    employee.earn = function () {
      console.log('I\'m %s. I get %f dollar per hour', this.type, this.money);
    };

    return employee;
  };
}

function FullTime() {
  this.money = 10;
}

function PartTime() {
  this.money = 5;
}

function Manager() {
  this.money = 20;
}

const factory = new Factory();

const e1 = factory.createEmployee('fulltime');
const e2 = factory.createEmployee('parttime');
const e3 = factory.createEmployee('manager');

e1.earn(); // I'm fulltime. I get 10 dollar per hour
e2.earn(); // I'm parttime. I get 5 dollar per hour
e3.earn(); // I'm manager. I get 20 dollar per hour
```

`createEmployee`메소드는 실제 팩토리 메소드로 클라이언트에서 유형을 전달받는다.<br />
이 팩토리에 의해 만들어진 모든 직원은 동일한 인터페이스를 갖게 된다.

## 정리
`팩토리 패턴`을 사용하면 클라이언트에 객체 생성을 위임하면서 인스턴스화할 형식을 관리할 수 있다.<br />
또한, 자주 사용되면서 다른 특성을 가지는 객체 컬렉션에서 유용하게 사용될 수 있다.

다음엔 [프로토타입 패턴](/js-pattern-3/)에 대해 알아보겠다.
