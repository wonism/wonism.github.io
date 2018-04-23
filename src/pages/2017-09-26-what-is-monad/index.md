---
title: "간단한 Monad 예제"
date: "2017-09-26T23:01:23.000Z"
path: "/monad-simple-example/"
tags: ["javascript", "monad", "functional programming"]
summary: "Monad는 순서가 있는 연산을 처리할 때 사용되는 디자인 패턴으로 부작용을 관리하기 위해 함수형 프로그래밍 언어에서 사용된다."
category: "JavaScript"
images: ["images/fp.jpg"]
---

`Monad`는 순서가 있는 연산을 처리할 때 사용되는 디자인 패턴으로 부작용을 관리하기 위해 함수형 프로그래밍 언어에서 사용된다.

## 간단한 모나드 구현
### f⋄g(x) = f(g(x))
삼각함수 `sine`의 값을 구하는 `Math.sin`을 래핑하는 함수 `sine`과 숫자의 큐브를 구하는 래퍼 함수가 있다고 가정한다.

```js
const sine = x => Math.sin(x);
sine(Math.PI * 1/2); // 1

const cube = x => (x ** 3);
cube(3); // 27
```

`x`를 입력받는 `sine`의 반환값을 `cube`에 전달하는 함수는 다음과 같이 구성될 수 있다.
```js
const cubeThenSine = x => cube(sine(x));
cubeThenSine(1); // 0.5958232365909556
```

함수 구성을 캡슐화하는 `compose`를 사용한다면 다음과 같다.
```js
const compose = (f, g) => x => f(g(x));
// posibble to use Ramda's or Lodash's

const sineCube = compose(cube, sine);
sineCube(1); // 0.5958232365909556
```

### 함수 구성
__로깅__

함수가 호출되었다는 것을 추적하기 위해 `console.log`를 사용하는 대신 함수가 한 쌍의 값을 반환하도록 수정한다. (`console.log`는 부작용을 일으키기 때문이다.)
```js
const sine = x => [Math.sin(x), 'sine was called.'];
const cube = x => [x ** 3, 'cube was called.'];

sine(2); // [0.9092974268256817, 'sine was called.']
cube(2); // [8, 'cube was called.']
compose(sine, cube)(2); // [NaN, 'sine was called.']
```

위 함수는 두 가지 측면에서 예상치 못한 값을 반환한다.
1. `sine`은 `Math.sin`을 계산하려고 하지만, 입력받은 인자가 숫자가 아니기 때문에 `NaN`을 반환하게 된다.
2. `cube`의 반환값의 2번째 원소인 `cube was called.`가 사라진다.

이를 해결하기 위해 각 함수의 반환값을 분리하고 관심사에 따라 다시 결합한다.
```js
const composeM = (f, g) => x => {
  const [y, s] = g(x);
  const [z, t] = f(y);

  return [z, s + t];
};

composeM(sine, cube)(3); // 0.956375928404503, 'cube was called.sine was called.'
```

### Bind
각각의 함수를 그대로 사용하려면, 원하는 형식으로 변환하는 도구를 제공하는 것이 좋다.<br />
이를 `bind` 함수라고 하는데, `Haskell`에서는 `>>=`로 사용된다.<br />
`bind`는 `Number -> (Number, String)`함수를 받아 `(Number, String) -> (Number, String)`함수를 반환한다.<br />
(이 `bind`는 `Function.prototype.bind`와는 전혀 다르다.)

```js
const bind = f => (tuple) => {
  const [x, s] = tuple;
  const [y, t] = f(x);

  return [y, s + t];
};
```

이 `bind`함수는 다음과 같이 사용할 수 있다.
```js
composeM(bind(sine), bind(cube))(3, ''); // 0.956375928404503, 'cube was called.sine was called.'
```

### Unit
`composeM`된 함수의 인자로 쓸데 없는 `''`를 넘기고 있다.<br />
함수를 변환하는 것 뿐만 아니라 값을 수용가능한 형태로 변환하는 것이 필요하다.<br />
함수 `unit`는이를 위한 함수로, 함수가 사용할 수 있는 기본 컨테이너로 래핑하는 것이다.

```js
const unit = x => [x, ''];

composeM(bind(sine), bind(cube))(unit(3)); // 0.956375928404503, 'cube was called.sine was called.'
```

`composeM(bind(sine), bind(cube))`와 `unit`을 구성할수도 있다.
```js
compose(composeM(bind(sine), bind(cube)), unit)(3); // 0.956375928404503, 'cube was called.sine was called.'
```

### Lift
`lift`는 `Number -> Number` 함수를 받아 `Number -> (Number, String)` 함수를 반환하며, 다음과 같이 구현할 수 있다.
```js
const lift = f => compose(unit, f);

lift((x) => { /* ... */ });
```

## 참조
- [Translation from Haskell to JavaScript of selected portions of the best introduction to monads I’ve ever read](https://blog.jcoglan.com/2011/03/05/translation-from-haskell-to-javascript-of-selected-portions-of-the-best-introduction-to-monads-ive-ever-read/)
