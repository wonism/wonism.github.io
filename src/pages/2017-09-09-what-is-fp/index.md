---
title: "함수형 프로그래밍이란?"
date: "2017-09-09T23:52:32.000Z"
path: "/what-is-fp/"
tags: ["javascript", "functional programming", "함수형 프로그래밍", "fp", "lodash", "ramda"]
summary: "함수형 프로그래밍은 순수한 함수를 작성하고, 공유된 상태와 변경 가능한 데이터 및 부작용을 피하여 소프트웨어를 작성하는 프로세스이다."
category: "Functional Programming"
images: ["images/fp.jpg"]
---

함수형 프로그래밍은 순수한 함수를 작성하고, 공유된 상태와 변경 가능한 데이터 및 부작용을 피하여 소프트웨어를 작성하는 프로세스이다.<br />
함수형 프로그래밍은 명령형이 선언형이며, 애플리케이션의 상태는 순수한 함수를 통해 전달된다.<br />
애플리케이션의 상태가 공유되고, 객체의 메소드와 사용되는 객체 지향 프로그래밍과는 대조된다.

## 함수형 프로그래밍의 장점
함수형 코드는 명령형이나 객체지향 코드보다 간결하고 예측하기 쉬우며, 이에 따라 테스트가 더 쉬워진다.

## Pure functions
함수형 프로그래밍에서 중요한 핵심은 함수는 부작용이 없어야 하며, 외부의 상태에 종속되지 않아야 한다.<br />
즉, 함수는 입력을 받고 출력을 반환함에 있어 외부의 값에 접근하지 않아야 한다.<br />
다음 예제를 통해 `순수함수`와 `순수함수가 아닌 함수`에 대해 알아보겠다.

```js
/* pure function */
const double = num => (num * 2);

/* impure function */
const operand = 2;
const multiple = num => (num * operand);
```

`double`의 입력이 `2`라면, 해당 함수의 반환값은 항상 `4`이다.<br />
반면, `multiple`의 입력이 `2`로 고정되어도 함수 외부의 `operand`가 다른 `2`가 확실하지 않다면 반환 값을 `4`라고 예상하기 힘들다.

## Higher Order Functions
`HOC`(Higher Order Functions)는 다른 함수를 인자로 사용하거나 함수를 반환하는 함수, 또는 두 가지 특징을 모두 가진 함수이다.<br />
고차 함수는 다음과 같은 경우 주로 사용된다.<br />
- 콜백 함수, 프로미스, 모나드 등을 사용하여, 동작과 효과 또는 비동기 흐름 제어를 추상화하거나 격리한다.
- 다양한 데이터 유형에 대해 작동할 수 있는 유틸리티 생성한다.
- 함수를 부분적으로 인수에 적용하거나 재사용 또는 함수 조합을 위한 커리함수를 작성한다.
- 함수 목록을 가져오고, 해당 입력 함수의 조합을 반환한다.

다음은 사용 예제이다.

```js
const isEven = x => !(x % 2);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers); // 2, 4, 6, 8, 10
```

`isEven`은 배열을 처리하는 로직이 필요 없으며, 배열을 순환하면서 재사용된다.

## Currying
커링은 여러 인자를 받는 함수를 인자 하나씩 사용하여 함수 순서를 실행할 수 있도록 변환하는 것을 말한다.<br />
이는 람다 표현식과 클로저를 통해 쉽게 구현할 수 있다.

```js
/* not curried function */
function sumOfThreeThings(x, y, z) {
  return x + y + z;
}

sumOfThreeThings(1, 2, 3); // 6

/* curried function */
const sumOfThreeThings = x =>
  y =>
    z =>
      x + y + z;
sumOfThreeThings(1)(2)(3); // 6
```

### Auto-currying
[`lodash`](https://github.com/lodash/lodash)와 [`Ramda`](https://github.com/ramda/ramda)는 `curry`메소드를 가지고 있다. 이는 여러개의 인수를 가지는 함수를 커링된 함수로 만들어준다.

```js
// use lodash or ramda
const curry = _.curry || R.curry;

// given function that add 2 parameters
const add = (x, y) => x + y

// transfired function
const curriedAdd = curry(add);

// results
curriedAdd(1)(2) // 3
curriedAdd(1) // (y) => 1 + y
curriedAdd(1, 2) // 3
```

## Function composition
합성함수는 말그대로 두 가지 이상의 함수가 합성되었음을 뜻한다.<br />
두 함수 `f`와 `g`가 있고 `f(g(x))`와 같이 사용된다고 할 때, 이를 수식 `f ∘ g(x)`과 같이 표현할 수 있다.<br />
다음은 합성함수의 예시이다.

```js
const compose = (f, g) => x => f(g(x));

const add = x => y => x + y;
const pow = x => y => y ** x;

const add2 = add(2);
const square = pow(2);

const add2ThenSqaure = compose(square, add2);

add2ThenSquare(10); // 144
```

## Point free notation
`Point free`는 함수를 작성할 때, 매개변수를 정의하지 않는 것이다.<br />
이는 함수를 더욱 간결하게 해준다.<br />
다음은 `point free`한 함수에 대한 예이다.

```js
const map = fn => list => list.map(fn);
// or use lodash/fp
// import { map } from 'lodash/fp';

const add = x => y => x + y;

/* function without point-free */
const incrementAll = numbers => map(add(1))(numbers);

/* function with point-free */
const incrementAllWithPointFree = map(add(1));

incrementAll([1, 2, 3]); // [2, 3, 4]
incrementAllWithPointFree([1, 2, 3]); // [2, 3, 4]
```

불필요한 매개변수를 사용하지 않으므로 매개변수에 대한 이름들에 대해 생각하지 않아도 되며, 코드가 훨씬 간결해진다.

## Recursion
재귀 함수는 어느 조건을 만족할 때까지 자기 자신을 호출하는 함수이다.<br />
자바스크립트는 반복을 할 때, `for`, `while` 등의 반복문을 사용하지만, 함수형 프로그래밍에서는 반복문 대신 재귀를 사용한다.<br />
아래 예제는 동일한 루프 회수와 값을 얻게되는 반복문과 재귀함수이다.<br />
기존의 어떤 값을 수정하는 것이 아니라, 기존 값으로 새로운 값을 계산하고 이를 사용한다.

```js
/* sum 1..10 with loop */
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i + 1;
}
console.log(acc); // 55

/* sum 1..10 with recursion */
sumRange = ({ start, end }) =>
  (sum) => {
    if (start > end) {
      return sum;
    }
    return sumRange({ start: start + 1, end })(sum + start);
  };

sumRange({ start: 0, end: 10 })(0);
```

재귀는 `for`, `while` 등의 반복문을 대체할 수 있을 뿐만 아니라, 훨씬 유용하다. 특히 `분할 및 정복` 알고리즘을 구현하는 데 매우 유용하다.<br />
가장 대표적인 재귀 함수 사용 예는 팩토리얼(`!`)이다.

```js
const factorial = n =>
  n ?
    n * factorial(n - 1) :
    1;
```

#### 재귀의 단점
꼬리재귀 최적화가 되어있지 않은 언어에서는 재귀 사용 시 단점들이 있다.
- 반복문에 비해 속도가 느리다.
- 스택을 사용하기 때문에 반복이 많아질 경우, 스택오버플로우가 발생될 수도 있다.

`ES2015`의 `strict mode`는 `TCO`(Tail Call Optimization)를 제공하지만, ES5는 그렇지 않다.<br />
따라서, ES5에서 일반 반복대신 재귀를 사용하는 것은 성능 상의 이슈를 가질 수 있다.

## Monads
`Monad`는 `of`와 `chain`이 있는 객체이다.(`chain`은 중첩된 객체를 `un-nenesting`하는 점을 제외하면, `map`과 같다.)<br />

```js
// Implementation
Array.prototype.chain = function (f) {
  return this.reduce((acc, it) => acc.concat(f(it)), []);
}

// Usage
Array.of('cat,dog', 'fish,bird').chain(e => e.split(',')); // ['cat', 'dog', 'fish', 'bird']

// Difference with map
Array.of('cat,dog', 'fish,bird').map(e => e.split(',')); // [['cat', 'dog'], ['fish', 'bird']]
```

## 함수형 자바스크립트
자바스크립트는 유연하다. 함수형, 객체지향형 패러다임의 특징을 모두 가지고 있다.<br />
함수형 패러다임으로 코드를 작성할 수 있지만 이상적인 함수형 프로그래밍을 하긴 어렵다. 하지만, 다양한 라이브러리를 통해 이를 보완할 수 있다.

### 불변성
위에서 말했듯이 함수형 프로그래밍에서는 부작용이 없어야 한다.<br />
따라서, 변수를 없애고 모든 값을 상수로 만들기 위해 `ES2015`의 `const`를 사용할 수 있다.<br />
`const`는 객체가 아닌 값에 대해서는 충분하지만, 객체에서는 충분하지 않다.

```js
const arr = [1, 2, 3];

arr.push(4);
arr.unshift(0);

console.log(arr); // [0, 1, 2, 3, 4]

const obj = { x: 1, y: 2 };

delete obj.x;
obj.y = 5;
obj.z = 0;

console.log(obj); // { y: 5, z: 0 };
```

`const`로 선언되었지만, `arr`와 `obj`는 변경되었다.
이를 방지하기 위해, [`Immutable.js`](https://github.com/facebook/immutable-js) 등의 라이브러리를 사용하거나, [`Object.freeze`](https://developer.mozilla.org/cs/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze) 메소드를 사용할 수 있다.

#### Object.freeze
다음은 `Object.freeze`의 사용 예제이다.

```js
const arr = Object.freeze([1, 2, 3]);
// arr.push(4); throw error
// arr.unshift(0); throw error

const obj = Object.freeze({ x: 1, y: 2 });
// delete obj.x; throw error
// obj.y = 5; throw error
// obj.z = 0; throw error
```

하지만 `Object.freeze`는 깊은 곳 까지 불변성을 가지게 하지는 못한다.  이 때, [`deep-freeze`](https://github.com/substack/deep-freeze)를 사용할 수도 있다.

#### lodash/fp
다음은 `fp.set`을 통한 객체 사용의 예제이다.<br />
`Immutablity.js`나 `Object.freeze`를 사용하지 않으면 객체의 불변성을 보장할 수는 없지만, 객체를 직접 사용하는 경우를 만들지 않음으로써, 객체의 불변성을 보장할 수 있다.

```js
import fp from 'lodash/fp';
const { set } = fp;
// const { set, flow } = fp;

const obj = { x: 1, y: { innerY: 2 } };
const newObj = set('y.innerY', 42)(set('z', 3)(obj));
// of use flow
// const newObj = flow(fp.set('y.innerY', 42), fp.set('z', 3))(obj);

console.log(obj); // { x: 1, y: { innerY: 2 } }
console.log(newObj); // { x: 1, y: { innerY: 42 }, z: 3 }
```

#### Spread operator
`ES2016`의 `...`를 통해 객체를 변경을 피할 수도 있다.

```js
const obj = { x: 1, y: 2 };
const newObj = { ...obj, z: 3 };

console.log(obj); // { x: 1, y: 2 }
console.log(newObj); // { x: 1, y: 2, z: 3 }
```

### 커링
```js
const f = a => b => c => d => e => a + b + c + d + e;
f(1)(2)(3)(4)(5);
```

이 커링된 함수는 `()`가 너무 많다. 이를 개선하기 위해 위에서 언급한 `lodash`나 `ramda`를 사용할 수 있다.

```js
const curry = _.curry || R.curry;
const f = curry((a, b, c, d, e) => a + b + c + d + e;

f(1)(2)(3)(4)(5); // 15
f(1)(2, 3, 4, 5); // 15
f(1, 2)(3)(4, 5); // 15
f(1, 2, 3, 4, 5); // 15
```

### 합성함수
합성함수 예제에서 `const compose = (f, g) => x => f(g(x));`와 같이 함수를 합성했지만, `ramda`의 `compose`함수를 사용할 수도 있다.

```js
const composedFunction = R.compose(x => x + 5, x => x * 10);
```

## 참고
- [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)
- [Mastering ES6 higher-order functions for Arrays](https://www.airpair.com/javascript/posts/mastering-es6-higher-order-functions-for-arrays)
- [Why Functional Programming Matters](https://www.cs.kent.ac.uk/people/staff/dat/miranda/whyfp90.pdf)
- [Tail call optimization in ECMAScript 6](http://2ality.com/2015/06/tail-call-optimization.html)
