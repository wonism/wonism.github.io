---
title: "JavaScript에서 Object 복사하기"
date: "2017-10-14T23:06:33.000Z"
path: "/copy-object/"
tags: ["javascript", "object", "javascript 기초"]
summary: "객체가 아닌 Primitive의 값을 복사하려면 단순히 b = a와 같이 변수에 복사하고자 하는 변수를 대입하면 된다. 하지만, 객체에서는 b = a와 같은 방법을 사용할 수 없다. 객체를 참조하는 복사가 이루어지기 때문이다."
category: "JavaScript"
images: ["images/js.jpg"]
---

## 객체를 참조하는 복사

객체가 아닌 Primitive의 값을 복사하려면 단순히 `b = a`와 같이 변수에 복사하고자 하는 변수를 대입하면 된다.<br />
하지만, 객체에서는 `b = a`와 같은 방법을 사용할 수 없다. 객체를 참조하는 복사가 이루어지기 때문이다.<br />
따라서, `b = a`를 수행한 뒤 `a`가 수정이 되면, `b`까지 수정되는 것을 볼 수 있다.<br />

```js
const obj1 = { a: 42 };
const obj2 = obj1;

obj2.a = 5;

console.log(obj1); // { a: 5 }
```

## 얕은 복사하기(Shallow copy)

객체를 복사하기 위한 방법으로 다양한 방법이 있다.<br />
`Object.prototype.constructor`메소드를 사용하거나, `Lodash`, `Ramda`같은 라이브러리를 사용하는 것이다.<br />

### constructor 메소드 사용하기

```js
function copyObject(obj) {
  if (obj === null || typeof obj === 'object') {
    return obj;
  }

  const copiedObject = obj.constructor();

  for (let key in obj) {
    if (obj.hasOwnProperty(prop)) {
      copiedObject[key] = obj[key];
    }
  }
}

const obj1 = { a: 42 };
const obj2 = copyObject(obj1);

obj2.a = 5;

console.log(obj1); // { a: 42 }
```

위와 같이, 인자가 `null`이 아닌 객체일 경우, `constructor`메소드로 해당 객체와 똑같은 객체를 생성한다.
그 다음, `hasOwnProperty`를 통해 해당 객체가 인자로 넘긴 프로퍼티를 가지고 있는지 체크하고, 이에 맞는 프로퍼티에 같은 값을 할당한다.

#### 참고 : Spread operator 사용하기

`ES2015`의 `...`를 사용해도 된다.

```js
const obj1 = { a: 42 };
const obj2 = { ...obj1 };

obj2.a = 5;

console.log(obj1); // { a: 42 }
```

### Lodash & Ramda

```js
import fp from 'lodash/fp';
import R from 'ramda';

const obj1 = { a: 42 };
const obj2 = fp.clone(obj1);

const obj3 = { a: 42 };
const obj4 = R.merge({}, obj3);
```

`Ramda`도 `clone`이란 메소드가 있지만, `Ramda`의 `clone`은 깊은 복사를 수행한다.<br />
따라서 얕은 복사의 목적으로 객체를 복사하고자 할 때는 `merge`가 훨씬 빠르다.

## 깊은 복사하기(Deep copy)

위 얕은 복사에서는 객체의 한 프로퍼티 값이 객체이고, 해당 객체가 수정이 되면, 원본의 프로퍼티 값이 수정이 되는 문제가 있다.<br />
이를 피하려면 깊은 복사를 수행한다. 깊은 복사는 얕은 복사와 마찬가지로 `constructor`메소드를 사용하거나, 외부 라이브러리를 사용하는 방법이 있다.

### constructor 메소드 사용하기

```js
function copyObject(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  const copiedObject = obj.constructor();

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObject[key] = copyObject(obj[key]);
    }
  }

  return copiedObject;
}

const foo = {
  deep: {
    key: 'value'
  },
  shallow: false
};
const bar = copyObject(foo);

bar.deep.key = 'other value';

console.log(foo); // { deep: { key: 'value' }, shallow: false }
console.log(bar); // { deep: { key: 'other value' }, shallow: false }
```

### Lodash & Ramda

```js
import fp from 'lodash/fp';
import R from 'ramda';

const obj1 = { a: 42 };
const obj2 = fp.cloneDeep(obj1);

const obj3 = { a: 42 };
const obj4 = R.clone(obj3);
```
