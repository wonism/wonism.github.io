---
title: "JavaScript Decorator 이해하기"
date: "2018-08-06T19:48:56.000Z"
path: "/what-is-decorator/"
tags: ["javascript", "decorator", "descriptor"]
summary: "데코레이터를 이해하기 전에 설명자(Descriptor)에 대해 먼저 알아야 한다. 설명자는 자바스크립트 객체의 프로퍼티로 프로퍼티가 쓰기 가능한지 열거 가능한지 여부를 나타낸다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## Descriptor
데코레이터를 이해하기 전에 `설명자`(`Descriptor`)에 대해 먼저 알아야 한다.<br />
설명자는 자바스크립트 객체의 프로퍼티로 프로퍼티가 쓰기 가능한지 열거 가능한지 여부를 나타낸다.<br />
간단한 객체를 만든 뒤, 프로퍼티를 추가하면 각 프로퍼티는 기본 프로퍼티 설명자를 가진다.

프로퍼티의 설명자를 구하기 위해서는 `Object.getOwnPropertyDescriptor(obj, propName)` 메소드를 사용해야 한다.
이 때, 2번째 인자인 `propName`은 객체인 `obj`의 속성이며 프로토타입 체인에 속하지 않아야 한다.<br />
이 메소드는 프로퍼티의 현재 값, 권한 등을 가지는 객체를 돌려주며, 사용 예는 다음과 같다.
(이외에도 값을 반환하거나 변경하는 함수인 `get`과 `set` 인자가 있지만, 선택사항이다.)

```js
const obj = {
  num: 42,
  str: 'e',
};

console.log(Object.getOwnPropertyDescriptor(obj, 'num'));
// { value: 42, writable: true, enumerable: true, configurable: true }
```

객체에 새 속성을 부여하기 위해서 `obj.propName = value;`와 같은 방식을 사용하기도 하지만, `Object.defineProperty` 메소드를 사용하기도 한다.
이 때, 메소드의 결과값은 1번째 인자의 객체이다.

__writable__
`writable`은 객체의 프로퍼티가 쓰기 가능한 지의 여부이며, `false`일 경우 값 쓰기가 안 된다.

```js
const obj = {
  num: 100,
};

Object.defineProperty(obj, 'num', { writable: false });
// you can also pass the `value` in 3rd parameter

obj.num = 0;

console.log(obj); // { num: 100 }
```

__enumerable__
`enumerable`은 객체의 프로퍼티가 열거 가능한 지의 여부이며, `false`일 경우 `Object.keys`에서 해당 프로퍼티를 볼 수 없다.<br />
(`Object.values`, `Object.entries`도 마찬가지이다.)

```js
const obj = {
  num: 10,
};

Object.defineProperty(obj, 'num', { enumerable: false });

Object.keys(obj); // []
Object.values(obj); // []
Object.entries(obj); // []
```

__configurable__
`configurable`은 객체의 프로퍼티가 `defineProperty`를 통해 설정 될 수 있는 지의 여부이며, `false`일 경우 `Object.defineProperty`로 해당 프로퍼티를 수정할 수 없다.<br />
이는 주로 사용자가 객체의 행동을 수정하지 못 하게 할 때 사용한다.

```js
const obj = {
  num: 5,
};

Object.defineProperty(obj, 'num', { writable: false, configurable: false });

Object.defineProperty(obj, 'num', { writable: true }); // Uncaught TypeError
```

__getter/setter__
`get`(`getter`)나 `set`(`setter`)는 주로 동적으로 계산된 값을 반환하는 프로퍼티에 접근해야하는 경우 또는 명시적인 메소드 호출을 사용하지 않고도 내부 변수의 상태에 접근하는 경우 등에 사용한다.

이 때, 다음과 같은 주의사항이 있다.
- 식별자는 숫자 혹은 문자열이다.
- `getter`는 오직 0개 혹은 1 개의 인자를 가질 수 있으며, `setter`는 오직 1개의 인자를 가질 수 있다.
- 중복되는 프로퍼티는 금지된다.

```js
const car = {
  model: 'x5',
  maker: 'bmw',
  color: 'white',
  /*
  get detail() {
    return `${this.color} ${this.model}`
  },
  set detail(desc = '') {
    const [color, model] = desc.split(' ');
    this.color = color;
    this.model = model;
  }
  */
};

car.defineProperty(car, 'detail', {
  get: function() {
    return `${this.color} ${this.model}`
  },
  set: function(desc) {
    const [color, model] = desc.split(' ');
    this.color = color;
    this.model = model;
  },
});

car.detail; // white x5
car; // { model: 'x5', maker: 'bmw', color: 'white' }

car.detail = 'red x3';
car.detail; // red x3
car; // { model: 'x3', maker: 'bmw', color: 'red' }
```

## Decorator
`장식자`는 클래스 프로퍼티나 메소드 혹은 클래스 자체를 수정하는 데 사용되는 자바스크립트 함수이다. (순수 함수로 작성되는 것이 좋다.)<br />
문법은 `@decoratorFunction`과 같으며 클래스의 프로퍼티, 메소드, 클래스 자신의 바로 윗줄에 추가해준다.

또한, 장식자는 장식자가 적용된 메소드가 호출되거나, 클래스 인스턴스가 만들어지는 등 런타임에 실행된다.

위 함수는 추후 메소드에 @chaining 형식으로 사용될 함수입니다. @과 함께 함수가 호출되는 경우 받게 되는 파라미터는 다음과 같습니다.

target : 속성을 정의하고자 하는 객체
name : 속성의 이름
descriptor : 새로 정의하고자 하는 속성에 대한 설명


### Environments
트랜스파일러인 [babel](http://babeljs.io/)과 플러그인 등을 설치한다.

```
# install packages
$ npm i -D @babel/cli @babel/node @babel/core @babel/plugin-proposal-decorators

# create .babelrc
$ echo "{ \"plugins\": [ [\"@babel/plugin-proposal-decorators\", { \"legacy\": true }] ] }" > .babelrc

# run babel-node
$ ./node_modules/.bin/babel-node ./FILE
```

### Class method decorator
```js
const readOnly = (target, property, descriptor) => { // with new Person, target will be an instance of Person
  descriptor.writable = false;
  return descriptor; // this function MUST return descriptor
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @readOnly
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// create instance
const p = new Person('John', 'Doe');
console.log(p.getFullName());

// Person.prototype.getFullName = () => 'CRACKED';
```

__참고 : 인자를 포함한 장식자__
[클로저](/closure/)를 이용해 인자를 가지는 장식자를 정의할 수 있다.

```js
const logger = msg =>
  (target, property, descriptor) => {
    const method = descriptor.value;

    // do NOT use arrow function in here. to bind `this`
    descriptor.value = function (...args) {
      console.log('[LOG]', msg);
      return method.apply(this, args);
    };

    return descriptor;
  };

const readOnly = (target, property, descriptor) => {
  descriptor.writable = false;
  return descriptor;
};

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  @logger('call getFullName method on Person')
  @readOnly
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// create instance
const p = new Person('John', 'Doe');
console.log(p.getFullName());
```

### Class instance field decorator
클래스 인스턴스의 필드 장식자를 만드는 것은 까다롭다. 클래스 인스턴스 필드는 클래스의 일부나 프로토타입이 아니기 때문이다.<br />
(인스턴스 필드 장식자는 실험적이기 때문에 stage 4로 넘어갈 때까지 구문이 변경될 가능성이 있다. 참고 : [Decorators proposal](https://tc39.github.io/proposal-decorators/))

```js
const toPascalCase = (target, property, descriptor) => {
  const value = descriptor.initializer();
  descriptor.initializer = () => value.replace(/(\w)(\w*)/g, ($0, $1, $2) => ($1.toUpperCase() + $2.toLowerCase()));

  return descriptor;
};

class Person {
  @toPascalCase
  firstName = 'jane';

  @toPascalCase
  lastName = 'doe';

  constructor(firstName, lastName) {
    if (firstName) {
      this.firstName = firstName;
    }

    if (lastName) {
      this.lastName = lastName;
    }
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

console.log(new Person());
// Person { firstName: "Jane", lastName: "Doe" }
```

### Class decorator
```js
const withDob = PersonRef =>
  class extends PersonRef {
    constructor(...args) {
      super(...args);
      this.dob = (new Date()).toString();
    }

    setDob(dob) {
      this.dob = dob;
    }
  }

@withDob
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

const p = new Person('Jaewon', 'Kim');
p.setDob((new Date('1990-02-05')).toString());
```

## 참고
- [JavaScript — Property Descriptor](https://codeburst.io/javascript-object-property-attributes-ac012be317e2)
- [Exploring EcmaScript Decorators](https://medium.com/google-developers/exploring-es7-decorators-76ecb65fb841)
- [Github repository : wycats/javascript-decorators](https://github.com/wycats/javascript-decorators)
