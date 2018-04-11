---
title: "자바스크립트 패턴 - 5"
date: "2017-10-29T00:14:31.000Z"
path: "/js-pattern-5/"
tags: ["javascript", "pattern", "design pattern", "디자인패턴", "decorator", "장식자"]
summary: "반복자 패턴은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다. 반복자 패턴을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## Decorator
`장식자 패턴`은 객체의 동작을 동적으로 확장한다. 런타임 시 새로운 동작을 추가하는 기능은 원본 객체를 감싸는 `Decorator` 객체에 의해 수행된다.<br />
데코레이터는 컴파일 타임에 발생하는 상속과 달리 런타임 변경을 허용함으로써 정적 언어에 유연성을 제공한다.

## ES5에서의 구현
```js
function Math() {
	this.add = function add(a, b) {
		const sum = a + b;
		console.log('result is %d', sum);
		return sum;
	};
}

const math = new Math();
math.add(42, 5);

function DecoratedMath(math) {
	this.math = math;
	this.add = function add(a, b) {
		const sum = a + b;
		console.log(`result is ${sum}. ${a} + ${b} = ${sum}`);
		return sum;
	};
}
```

## ES2017에서의 구현
먼저, 데코레이터를 지원하지 않는 환경이라면, `babel-plugin-transform-decorators-legacy` 패키지가 필요하다.
```js
// .babelrc.js
module.exports = {
  "presets": ["env"],
  "plugins": ["transform-decorators-legacy"]
};
```

```js
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

/**
 * target : 클래스의 인스턴스에 매핑된다.
 * name : 데코레이팅할 메소드의 이름
 * descriptor : 동작을 지정하거나, 접근 제한, 캐싱 구현 등을 할 수 있게 도와주는 객체
 */
function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = (...args) => {
    console.log(`Calling "${name}" with ${args}`);

    return oldValue.apply(null, arguments);
  };

  return descriptor;
}

const math = new Math();

math.add(42, 5); // Calling "add" with 42,5
```

## 정리
`반복자 패턴`은 클라이언트가 객체 컬렉션을 효과적으로 반복할 수 있게 해준다.<br />
`반복자 패턴`을 사용하면 개발자는 훨씬 유연하고 정교한 반복 구문을 설계할 수 있다.

다음엔 `퍼사드 패턴`에 대해 알아보겠다.
