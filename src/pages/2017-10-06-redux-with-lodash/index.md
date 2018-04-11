---
title: "Lodash로 좀 더 간결한 Reducer 코드 작성하기"
date: "2017-10-07T00:26:02.000Z"
path: "/redux-with-lodash/"
tags: ["javascript", "reactjs", "redux", "lodash", "functional programming"]
summary: "일반적으로 리듀서에서 액션의 타입에 따라 다른 작업을 수행하기 위해 switch를 사용한다. 이 때, 각 case마다 블록으로 사용하지 않는 이상 스코프의 범위는 switch의 블록이다."
components: [{
	rootId: 'redux-with-lodash',
	fileName: 'redux-with-lodash/index',
}]
category: "JavaScript"
images: ["images/redux.jpg"]
---

일반적으로 리듀서에서 액션의 타입에 따라 다른 작업을 수행하기 위해 `switch`를 사용한다.<br />
이 때, 각 `case`마다 블록`{ /* ... */ }`으로 사용하지 않는 이상 스코프의 범위는 `switch`의 블록이다.
따라서 여러 `case`에서 중복되는 변수명을 사용하려면, 해당 `case`마다 명시적으로 블록을 작성해야한다는 불편한 점이 있다.<br />
(참고 : [Switch안에서의 let과 const](/block-scope-in-switch))

하지만 지금 설명하고자 하는 방법을 사용하면 이러한 문제를 자연스럽게 해결할 수 있을 뿐만 아니라, 코드 또한 더욱 간결해진다.<br />
(예제에서 `lodash`를 사용하지만, `Ramda`를 사용하거나 외부 라이브러리를 사용하지 않고 직접 구현해도 된다.)

[Redux 튜토리얼](/redux-from-scratch)의 예제 코드를 수정하면서 코드가 어떻게 변하는지 살펴 보겠다.

## Reducer 코드 변경하기

먼저 리듀서를 생성하는 코드를 작성한다.<br />
정의되지 않은 `액션 타입`에 대해서는 전달받은 상태를 그대로 반환하며, 정의된 `액션 타입`에 대해서는 특정 연산을 한 새로운 상태를 반환한다.

```js
// src/utils/createReducer.js
import fp from 'lodash/fp';

const createReducer = (reducers = {}, initialState = {}) =>
  (state = initialState, { type, ...action }) => (
    fp.has(type)(reducers) ?
      reducers[type](state, action) :
      state
  );

export default createReducer;
```

다음, `src/index.jsx`의 리듀서 설정 부분을 변경한다.

```js
// src/index.jsx
/* ... */
import createReducer from './utils/createReducer';

const reducers = combineReducers({ todos: createReducer(TodoReducers, []) });
/* ... */
```

마지막으로 `리듀서` 코드를 수정한다.<br />
이 파일은 객체를 `export`하기만 하면 된다.

이 객체는 `액션 타입`들을 프로퍼티로 가지며, 이 프로퍼티들의 값은 각각 액션 타입에 따른 연산을 할 함수이다.

```js
// src/todo/TodoReducers.js
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FAILED_TO_ADD_TODO,
} from './TodoActionTypes';

export default {
  [ADD_TODO]: (state, { todo }) => [
    ...state,
    { todo, done: false },
  ],
  [REMOVE_TODO]: (state, { index }) => {
    const length = state.length;

    return [
      ...state.slice(0, index),
      ...state.slice(index + 1, length),
    ];
  },
  [TOGGLE_TODO]: (state, { index }) => {
    const length = state.length;
    const selectedTodo = state[index];
    const { todo } = selectedTodo;

    return [
      ...state.slice(0, index),
      {
        todo,
        done: !todo.done,
      },
      ...state.slice(index + 1, length),
    ];
  },
  [FAILED_TO_ADD_TODO]: (state) => {
    alert('중복된 아이템입니다.'); // eslint-disable-line
    return state;
  },
}
```

## 완성된 애플리케이션
<div id="redux-with-lodash"></div>
