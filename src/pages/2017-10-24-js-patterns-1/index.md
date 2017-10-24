---
title: "자바스크립트 패턴 - 1"
date: "2017-10-24T21:38:57.000Z"
path: "/js-pattern-1/"
tags: ["javascript", "pattern", "design pattern", "디자인패턴", "singleton", "싱글톤"]
summary: "디자인 패턴은 특정 문맥에서 공통적으로 발생하는 문제에 대한 재사용가능한 해결책이다. 먼저, 제일 간단한 싱글톤에 대해 알아보겠다."
category: "JavaScript"
---

## 디자인 패턴이란?
`디자인 패턴`은 특정 문맥에서 공통적으로 발생하는 문제에 대한 재사용가능한 해결책이다.

## Singleton
먼저, 제일 간단한 `싱글톤`에 대해 알아보겠다.

싱글톤은 특정 클래스의 인스턴스를 오직 하나만 유지하게 되는데, 동일한 클래스로 새로운 객체를 생성해도 처음 만들어진 객체를 얻게 된다.

### 객체 리터럴

자바스크립트의 리터럴로 객체를 생성하게 되면, 다른 어떤 객체와도 같지 않기 때문에 이 자체만으로 싱글톤이라고 볼 수 있다.

```js
const obj = { num: 42 };
const obj2 = { num: 42 };

obj == obj2; // false
obj === obj2; // false
```

위처럼 동일한 멤버를 가지는 객체를 생성해도 이전에 만들어진 객체와 동일하지 않다.

### new 연산자로 생성된 객체
`new` 연산자는 `생성자 함수` 또는 `클래스`를 통해 객체를 만들 수 있게 한다.<br />
즉, `new Constructor();`를 통해 생성된 객체는 항상 처음 만들어진 객체를 가리키게 되며, 다음과 같은 결과가 나와야 한다.

```js
const a1 = new A();
const a2 = new A();

a1 === a2; // true
```

이를 위한 방법으로는 여러가지 방법이 있다.

#### 스태틱 프로퍼티에 인스턴스 저장하기

```js
function Person(name) {
  if (Person.instance) {
    return Person.instance;
  }

  this.name = name;

  Person.instance = this;
}

const p1 = new Person('wonism');
const p2 = new Person('human');

p1 === p2 // true
p2.name // wonism
```

위에 언급한대로 스태틱 프로퍼티에 인스턴스를 저장한다.
간단한 방법이지만, `instance`가 공개되어 있다는 단점이 있다.

#### 클래스 키워드 사용하기

```js
class Person {
  constructor(name) {
    if (Person.instance) {
      return Person.instance;
    }
    this.name = name;
    return Person.instance;
  }
}

const p1 = new Person('wonism');
const p2 = new Person('human');

p1 === p2 // true
p2.name // wonism
```

바로 이전에 살펴본 예제 코드를 `class`로 변경한 것 뿐이다.

#### 클로저에 인스턴스 저장하기

```js
let Person;

(function iife() {
  let instance;
  Person = function Singleton(name) {
    if (instance) {
      return instance;
    }

    this.name = name;
    instance = this;
  }
})();

const p1 = new Person('wonism');
const p2 = new Person('human');

p1 === p2 // true
p2.name // wonism
```

생성자가 최초로 호출되면 생성자는 객체를 생성하고, 비공개 변수인 `instance`를 가리킨다. 두 번째 부터는 `instance`를 가리킨다.

<br />

## 정리
`싱글톤 패턴`은 객체지향 언어에서 여러 개의 인스턴스 생성을 피하는 유용한 패턴이다.<br />
(하지만 클래스 기반의 언어가 아닌 약타입 프로토타입 언어인 자바스크립트(ES3, ES5 등)에서는 이 패턴이 그렇게 유용한 편은 아니다.)

다음엔 `팩토리 패턴`에 대해 알아보겠다.
