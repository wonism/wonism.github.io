---
title: "자바스크립트 패턴 - 3"
date: "2017-10-25T23:15:15.000Z"
path: "/js-pattern-3/"
tags: ["javascript", "pattern", "design pattern", "디자인패턴", "prototype", "프로토타입"]
summary: "여기서 말하는 프로토타입은 함수를 확장할 수 있는 Function.prototype이 아니다.  프로토타입 패턴에서의 프로토타입은 프로토타입 인스턴스를 사용하여 만들 객체의 종류를 지정하고, 이 프로토타입을 복사함으로써 새 객체를 만든다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## Prototype
`프로토타입`은 프로토타입 인스턴스를 사용하여 만들 객체의 종류를 지정하고, 이 프로토타입을 복사함으로써 새 객체를 만든다.

`프로토타입 패턴`은 데이터베이스의 기본값과 일치하는 값을 가지는 객체 초기화에서 유용하게 사용된다.

## 구현
```js
function CarPrototype(proto) {
  this.proto = proto;
  this.clone = function clone() {
    const car = new Car();
    car.colors = proto.colors;
    return car;
  }
}

function Car(colors) {
  this.colors = colors;
  this.go = function go() {
    console.log('%s car is driven by human.', this.colors);
  };
}

const carProto = new Car('red');
const carPrototype = new CarPrototype(carProto);
const car = carPrototype.clone();

car.go(); // red car is driven by human.
```

`CarPrototype` 객체는 주어진 프로토타입 객체가 주어진 객체를 복제한다.<br />
또, `clone` 메소드를 호출하면 프로토타입으로 초기화된 속성 값들을 가지는 `Car` 객체를 생성한다.

## 정리
`프로토타입 패턴`은 새 객체를 생성하지만, 초기화되지 않은 객체를 생성하는 대신 `원형(Prototype)`에서 복사한 값으로 초기화되는 객체를 반환한다.<br />
이를 `Properties 패턴`이라고 하기도 한다.

구현을 통해 사용방법을 알아봤지만, 자바스크립트에 내장된 `prototype`기능을 사용하면 훨씬 효과적으로 이 작업을 수행할 수 있다.

다음엔 [반복자 패턴](/js-pattern-4)에 대해 알아보겠다.
