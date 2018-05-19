---
title: "Virtual DOM 살펴보기"
date: "2018-05-18T00:13:41.000Z"
path: "/deep-dive-into-vdom/"
tags: ["javascript", "virtual dom", "jsx", "reactjs"]
summary: "가상 DOM은 크게 두 가지 컨셉을 가진다.  1. 가상 DOM은 실제 DOM의 표현 방법이다.  2. 가상 DOM 트리에서 무엇인가 변경되면 새로운 트리를 얻게된다.  알고리즘은 두 트리를 비교하여 변경점을 찾고, 실제 DOM 변경에 필요한 최소한의 변경만을 수행한다. (참고로, 리액트의 트리 변경 알고리즘의 Big O는 O(n)이다.)"
category: "JavaScript"
images: ["images/js.jpg"]
---

## Virtual DOM 의 컨셉
가상 DOM은 크게 두 가지 컨셉을 가진다.

1. 가상 DOM은 실제 DOM의 표현 방법이다.
2. 가상 DOM 트리에서 무엇인가 변경되면 새로운 트리를 얻게된다.
   알고리즘은 두 트리를 비교하여 변경점을 찾고, 실제 DOM 변경에 필요한
   최소한의 변경만을 수행한다. (참고로, 리액트의 트리 변경 알고리즘의 Big O는 O(n)이다.)

## DOM 트리의 표현
```html
<ul id="list">
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
```

위와 같은 DOM 트리는 다음과 같은 자바스크립트 객체로 표현할 수 있다.
```js
{
  type: 'ul',
  props: {
    id: 'list',
  },
  children: [
    {
      type: 'li',
      props: {},
      children: ['first']
    },
    {
      type: 'li',
      props: {},
      children: ['second']
    },
    {
      type: 'li',
      props: {},
      children: ['third']
    }
  ]
}
```

간단한 DOM 트리 구조는 쉽게 구현할 수 있지만, 복잡한 DOM 트리구조라면 구현하기 어렵다.<br />
이를 해결하기 위해 간단한 헬퍼 함수를 만들면 다음과 같다.

```js
const h = (type, props, ...children) => ({ type, props, children });
```

(참고: [hyperscript](https://github.com/hyperhype/hyperscript))

이제, 위의 DOM 트리는 아래와 같이 나타낼 수 있다.

```js
h('ul', { id: 'list' },
  h('li', {}, 'first'),
  h('li', {}, 'second'),
  h('li', {}, 'third')
);
```

## JSX와 바벨
바벨을 사용하면 `jsx`문법을 사용할 수 있다.<br />
이 때, 바벨 플러그인 [babel-plugin-transform-react-jsx](https://www.npmjs.com/package/babel-plugin-transform-react-jsx)이 필요하며,
`pragma`를 통해 `jsx`문법을 트랜스파일할 때 사용되는 함수를 변경할 수 있다.<br />
(`pragma`의 기본 값은 리액트를 사용해본 사람이라면, 누구든 유추 가능할 것이다. 바로 `React.createElement`이다.)

```jsx
/** @jsx h */

const h = (type, props, ...children) => ({ type, props, children });

const div = <div>Deep dive into V-DOM!</div>;

console.log(JSON.stringify(div)); // {"type":"div","props":null,"children":["Deep dive into V-DOM!"]}
```

(참고: [React JSX transform](https://babeljs.io/docs/plugins/transform-react-jsx/))

## 실제 DOM에 그려보기
위에서 만든 가상 DOM에서 `children`은 텍스트 노드이거나 요소(element)이다. 따라서 가상 DOM은 조건에 따라 재귀적으로 호출될 것이며, 함수는 다음과 같을 것이다.

```js
const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const parent = document.createElement(node.type);

  node
    .children
    .map(createElement)
    .forEach(parent.appendChild.bind(parent));

  return parent;
};
```

```jsx
/** @jsx h */

// const h = ...
// const createElement = ...
// const div = ...

const root = document.getElementById('root');
root.appendChild(createElement(div));
```

## 새로운 노드 그리기

변경점을 찾고, 새로운 노드를 그리기 위해 가상 DOM을 업데이트하는 함수를 만들고자 한다.
먼저 변경에 대한 유즈케이스는 아래와 같다.

```html
<!-- before -->
<ul>
  <li>1</li>
</ul>

<!-- after -->
<ul>
  <li>1</li>
  <li>2</li>
</ul>
```

위와 같이 노드가 추가되는 경우에는 `appendChild`를 이용한다.

```html
<!-- before -->
<ul>
  <li>1</li>
  <li>2</li>
</ul>

<!-- after -->
<ul>
  <li>1</li>
</ul>
```

위와 같이 노드가 삭제되는 경우에는 `removeChild`를 이용한다.

```html
<!-- before -->
<ul>
  <li>1</li>
  <li>2</li>
</ul>

<!-- after -->
<ul>
  <li>1</li>
  <li>3</li>
</ul>
```

위와 같이 노드가 변경되는 경우에는 `replaceChild`를 이용한다.

```html
<!-- before -->
<ul>
  <li>1</li>
  <li>
    <span>2</span>
    <span>3</span>
  </li>
</ul>

<!-- after -->
<ul>
  <li>1</li>
  <li>
    <span>2</span>
    <div>3</div>
  </li>
</ul>
```

위와 같이 노드가 같은 구조를 가지는 경우에는 하위 노드들까지 동일한지 최하위 단계까지 내려가야 한다.

### 업데이트 함수 작성하기
위에서 살펴본 유즈케이스에 따라 점진적으로 함수를 작성한다.

__새로운 노드가 추가될 때__

```js
const updateElement = (parent, newNode, oldNode) => {
  if (!oldNode) {
    return parent.appendChild(createElement(newNode));
  }
};
```

__기존의 노드가 제거될 때__

```js
const updateElement = (parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    return parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    return parent.removeChild(parent.childNodes[index]);
  }
};
```

__노드가 변경될 때__

```js
const isChanged = (node1, node2) => (
  typeof node1 !== typeof node2 || (typeof node1 === 'string' && node1 !== node2) || node1.type !== node2.type
);

const updateElement = (parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    parent.removeChild(parent.childNodes[index]);
  } else if (isChanged(newNode, oldNode)) {
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  } else if (newNode.type) {
    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;

    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
    }
  }
};
```

## props 설정하기
JSX에서는 다음과 같이 `className`이나 `htmlFor`, `defaultChecked`등의 속성을 `props`로 전달할 수 있다.

```jsx
<div className="btn" role="button">Click</div>

/*
{
  type: 'div',
  props: {
    className: 'btn',
    role: 'button',
  },
  children: [],
}
*/
```

이러한 속성들을 렌더링하기 위해 먼저 노드의 `attribute`를 설정하는 함수를 만든다.

```js
const setProp = (node, name, value) => {
  node.setAttribute(name, value);
};
```

`props`의 `key`를 순회하면서 `setProp`을 호출함으로써 여러 `props`를 설정하는 함수 `setProps`는 다음과 같다.

```js
const setProps = (node, props) => {
  Object.keys(props).forEach((name) => {
    setProp(node, name, props[name]);
  });
};
```

앞서 정의했던 `createElement` 내부에서 `setProps`를 호출함으로써 `attribute`를 가진 노드를 생성할 수 있다.<br />
변경된 `createElement`는 다음과 같다.

```js
const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const parent = document.createElement(node.type);

  setProps(parent, node.props);
  node
    .children
    .map(createElement)
    .forEach(parent.appendChild.bind(parent));

  return parent;
};
```

`주의`할 점이 있다면, `class`나 `for` 등의 자바스크립트 예약어는 `jsx` 내에서도 사용할 수 없기 때문에 `className`, `htmlFor` 등으로 대체되는데, 이에 대한 처리가 필요하다는 것이다.

```js
const setProp = (node, name, value) => {
  if (name === 'className') {
    node.setAttribute('class', value);
  } else if (name === 'htmlFor') {
    node.setAttribute('for', value);
  } else {
    node.setAttribute(name, value);
  }
};
```

이외에도 `boolean`타입의 값을 넘기는 경우, HTML attribute를 추가하거나 제거하는 작업이 필요하다. 이를 구현하면 다음과 같다.

```js
const setBooleanProp = (node, name, value) => {
  if (value) {
    node.setAttribute(name, name);
    node[name] = value;
  } else {
    node.removeAttribute(name);
    node[name] = value;
  }
};

const setProp = (node, name, value) => {
  if (name === 'className') {
    node.setAttribute('class', value);
  } else if (name === 'htmlFor') {
    node.setAttribute('for', value);
  } else if (typeof value === 'boolean') {
    setBooleanProp(node, name, value);
  } else {
    node.setAttribute(name, value);
  }
};
```

## props 비교하기

위에서 노드에 대한 변경점을 찾았던 것처럼 `props` 에 대해서도 변경점을 찾고 가상 DOM을 업데이트하는 함수를 만든다.<br />
위와 비슷한 내용이며, 어려운 코드가 아니기 때문에 코드에 대한 설명은 생략한다.

```js
const { isEqual } = require('lodash');

const removeBooleanProp = (node, name) => {
  node.removeAttribute(name);
  node[name] = false;
};

const removeProp = (node, name, value) => {
  if (name === 'className') {
    node.removeAttribute('class');
  } else if (name === 'htmlFor') {
    node.removeAttribute('for');
  } else if (typeof value === 'boolean') {
    removeBooleanProp(node, name);
  }
};

const updateProp = (node, name, newValue, oldValue) => {
  if (!newValue) {
    removeProp(node, name, oldValue);
  } else if (!oldValue || isEqual(newValue, oldValue)) {
    setProp(node, name, newValue);
  }
};

const updateProps = (node, newProps = {}, oldProps = {}) => {
  const props = {
    ...newProps,
    ...oldProps,
  };

  Object.keys(props).forEach((name) => {
    updateProp(node, name, newProps[name], oldProps[name]);
  });
};
```

### 업데이트 함수 작성하기
`props`가 변경되었을 때, DOM을 업데이트하는 함수는 다음과 같이 작성한다.

```js
const updateElement = (parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    parent.removeChild(parent.childNodes[index]);
  } else if (isChanged(newNode, oldNode)) {
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  } else if (newNode.type) {
    updateProps(parent.childNodes[index], newNode.props, oldNode.props); // added

    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;

    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
    }
  }
}
```

## 이벤트 리스너 등록하기
먼저 추가되는 이벤트 리스너의 특징을 말하자면, prefix로 `on`이 붙으며, 전달받는 값의 타입은 함수이다.<br />
따라서, `setProp`에서 전달받는 파라미터 중 `value`의 타입이 함수이면, 아무런 attribute도 설정하지 않는다. (또른 `name`이 `on`으로 시작하는지 체크한다.)

```js
const setProp = (node, name, value) => {
  if (typeof value === 'function') {
  // or.. 2 is length of `on`
  // if (name.substr(0, 2) === 'on') {
    return;
  } else if (name === 'className') {
    node.setAttribute('class', value);
  } else if (name === 'htmlFor') {
    node.setAttribute('for', value);
  } else if (typeof value === 'boolean') {
    setBooleanProp(node, name, value);
  } else {
    node.setAttribute(name, value);
  }
};
```

이벤트 리스너를 등록하기 위해 `on`을 제외한 이벤트 이름을 추출하고, 해당 리스너를 추가하는 함수를 작성하면 다음과 같다.<br />
(위에서 이벤트를 전달받았는지 체크하기 위한 조건문은 `addEventListeners`에서 또 다시 한번 사용되기 때문에 `isEvent` 함수로 만들어 재사용한다.)

```js
const isEvent = value => (typeof value === 'function');

const getEventName = name => name.slice(2).toLowerCase();

const addEventListeners = (node, props) => {
  Object.keys(props).forEach((name) => {
    if (isEvent(props[name])) {
      node.addEventListener(getEventName(name), props[name]);
    }
  });
};
```

여기서 이벤트 캡처링 방식의 동작을 위해서 suffix로 `Capture`가 붙는지 확인하고, 조건에 부합하면, `addEventListner`의 세 번째 인자에 `true`를 넘겨주도록 한다.

```js
const isCapture = name => /Capture$/.test(name);

const addEventListeners = (node, props) => {
  Object.keys(props).forEach((name) => {
    if (isEvent(props[name])) {
      node.addEventListener(getEventName(name), props[name], isCapture(name));
    }
  });
};
```

이를 `createElement`에 넣으면 아래와 같다.

```js
const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const parent = document.createElement(node.type);

  setProps(parent, node.props);
  addEventListeners(parent, node.props);
  node
    .children
    .map(createElement)
    .forEach(parent.appendChild.bind(parent));

  return parent;
};
```

## 이벤트 리스너 제거하기
등록된 이벤트 리스너를 제거하기 위해서는 `removeProp`을 수정한다.

```js
const removeProp = (node, name, value) => {
  if (typeof value === 'function') {
    node.removeEventListener(getEventName(name), value, isCapture(name));
  } else if (name === 'className') {
    node.removeAttribute('class');
  } else if (name === 'htmlFor') {
    node.removeAttribute('for');
  } else if (typeof value === 'boolean') {
    removeBooleanProp(node, name);
  }
};
```

(이벤트 리스너를 다시 등록하는 것은 복잡한 작업이라 다음 기회에 다시 작성을 해볼 예정이다.)

## 마무리
```js
/** @jsx h */
const { isEqual } = require('lodash');

const h = (type, props, ...children) => ({ type, props: props || {}, children });

const isEvent = value => (typeof value === 'function');

const getEventName = name => name.slice(2).toLowerCase();

const isCapture = name => /Capture$/.test(name);

const addEventListeners = (node, props) => {
  Object.keys(props).forEach((name) => {
    if (isEvent(props[name])) {
      node.addEventListener(getEventName(name), props[name]);
    }
  });
};

const createElement = (node) => {
  if (typeof node === 'string') {
    return document.createTextNode(node);
  }

  const parent = document.createElement(node.type);

  setProps(parent, node.props);
  addEventListeners(parent, node.props);
  node
    .children
    .map(createElement)
    .forEach(parent.appendChild.bind(parent));

  return parent;
};

const setBooleanProp = (node, name, value) => {
  if (value) {
    node.setAttribute(name, name);
    node[name] = value;
  } else {
    node.removeAttribute(name);
    node[name] = value;
  }
};

const removeBooleanProp = (node, name) => {
  node.removeAttribute(name);
  node[name] = false;
};

const removeProp = (node, name, value) => {
  if (name === 'className') {
    node.removeAttribute('class');
  } else if (name === 'htmlFor') {
    node.removeAttribute('for');
  } else if (typeof value === 'boolean') {
    removeBooleanProp(node, name);
  }
};

const updateProp = (node, name, newValue, oldValue) => {
  if (!newValue) {
    removeProp(node, name, oldValue);
  } else if (!oldValue || isEqual(newValue, oldValue)) {
    setProp(node, name, newValue);
  }
};

const updateProps = (node, newProps = {}, oldProps = {}) => {
  const props = {
    ...newProps,
    ...oldProps,
  };

  Object.keys(props).forEach((name) => {
    updateProp(node, name, newProps[name], oldProps[name]);
  });
};

const setProp = (node, name, value) => {
  if (name === 'className') {
    node.setAttribute('class', value);
  } else if (name === 'htmlFor') {
    node.setAttribute('for', value);
  } else if (typeof value === 'boolean') {
    setBooleanProp(node, name, value);
  } else {
    node.setAttribute(name, value);
  }
};

const setProps = (node, props) => {
  Object.keys(props).forEach((name) => {
    setProp(node, name, props[name]);
  });
};

const isChanged = (node1, node2) => (
  typeof node1 !== typeof node2 || (typeof node1 === 'string' && node1 !== node2) || node1.type !== node2.type
);

const updateElement = (parent, newNode, oldNode, index = 0) => {
  if (!oldNode) {
    parent.appendChild(createElement(newNode));
  } else if (!newNode) {
    parent.removeChild(parent.childNodes[index]);
  } else if (isChanged(newNode, oldNode)) {
    parent.replaceChild(createElement(newNode), parent.childNodes[index]);
  } else if (newNode.type) {
    updateProps(parent.childNodes[index], newNode.props, oldNode.props);

    const newLength = newNode.children.length;
    const oldLength = oldNode.children.length;

    for (let i = 0; i < newLength || i < oldLength; i++) {
      updateElement(parent.childNodes[index], newNode.children[i], oldNode.children[i], i);
    }
  }
};

const div = <div onClick={() => { console.log('Hello'); }}>Deep dive into V-DOM!</div>;

const root = document.getElementById('root');
root.appendChild(createElement(div));
```

## 참고
- [Introducing JSX](https://reactjs.org/docs/introducing-jsx.html)
- [hyperscript](https://github.com/hyperhype/hyperscript)
- [React JSX transform](https://babeljs.io/docs/plugins/transform-react-jsx/)
