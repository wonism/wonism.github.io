---
title: "Redux 튜토리얼"
date: "2017-10-05T20:39:24.000Z"
path: "/redux-from-scratch/"
tags: ["javascript", "reactjs", "redux", "flux"]
summary: "Redux는 상태를 관리해주는 라이브러리로 React JS, Vue JS 등과 함께 사용되며, 큰 애플리케이션의 상태를 보다 쉽게 할 수 있도록 도와준다."
components: [{
	rootId: 'redux-tutorial',
	fileName: 'redux-tutorial/index',
}]
category: "JavaScript"
---

`Redux`는 상태를 관리해주는 라이브러리로 `React JS`, `Vue JS` 등과 함께 사용되며, 큰 애플리케이션의 상태를 보다 쉽게 할 수 있도록 도와준다.

## Flux
`Redux`에 대해 설명하기 앞서, `Flux`란 아키텍쳐에 대해 설명하겠다.<br />
`Flux`는 단방향 데이터 흐름을 이용함으로써 리액트의 컴퍼넌트들을 보완한다.<br />
사용자가 뷰와 상호작용할 때, 뷰는 중앙 디스패쳐를 통해 다양한 `store`에 `액션`을 전파한다.<br />
(`store`는 애플리케이션의 데이터와 로직을 가지고 있으며, 데이터와 로직은 상태에 따라 뷰를 업데이트하는 역할을 수행한다.)<br />
`Flux`에는 많은 `store`가 있으며, 각 `store`는 상태의 각각 다른 작은 부분이나 애플리케이션의 데이터를 사용한다.

### Flux 데이터 흐름
1. 사용자가 뷰와 상호작용을 하면, 뷰는 `액션`을 트리거한다.
2. `액션`이 해당 함수를 전달하고, 해당 함수는 `store`를 변경한다.
3. `store`가 데이터를 갱신하면, 뷰는 이에 따라 갱신된다.

애플리케이션이 커지면, 여러 `store`가 데이터를 관리하게 된다.

## Redux
`Redux`는 예측가능한 상태 컨테이너로 `Flux`의 구현체이다.<br />
하지만 완전한 `Flux` 구현체라고 보기는 힘들다. `Redux`는 애플리케이션의 상태를 위해 단 한 개의 스토어를 사용하기 때문이다.
대신, `Redux`의 `store`는 다양한 상태 객체로 나뉘어진다.

### Redux의 세 가지 원칙
1. 진리의 단일 소스
2. 상태는 읽기 전용
3. 순수 함수로써 변경이 된다.

### 액션
`Redux`의 상태를 변경하기 위해서는 `액션`을 내보내야한다. `액션`은 자바스크립트 객체이며, 어떤 일이 발생하는지 설명하는 `type` 속성을 반드시 가진다. 또한, 상태 변경을 위한 값인 `payload`를 가진다.<br />
이 때, `payload`는 없을 수도 있으며, `2`개 이상일 수도 있다. 또한, 속성 이름은 개발자가 임의로 지정할 수 있다.

### 액션 생성자
`액션 생성자`는 `액션`을 생성하는 함수이다.

```js
import { ADD_TODO, REMOVE_TODO } from './actionTypes';

export const addTodo = text => ({ type: ADD_TODO, text });
export const removeTodo = index => ({ typd: REMOVE_TODO, index });
```

### 리듀서
`액션`은 단지 어떤 일이 발생할지만을 설명한다. 애플리케이션의 상태가 어떻게 변할지 설명하는 일은 `리듀서`의 일이다.<br />
`리듀서`는 이전의 상태를 받아 새로운 상태를 반환한다.

```js
(previousState, action) => newState
```

다음은 `리듀서` 내부에서 절대 해서는 안 되는 일들이다.
1. `리듀서`의 인자를 변경하는 일
2. 부작용을 일으킬 수 있는 일
  1. DB 호출, API 호출, 라우팅 전환
  2. `Date.now()`, `Math.random()`과 같은 순수하지 않은 함수를 호출하는 일

### 스토어
`store`는 객체로써 그들을 하나로 모으는 일을 하며, 다음과 같은 일을 한다.
1. 애플리케이션의 상태를 가진다.
2. `getState()`를 통해 상태에 접근할 수 있다.
3. `dispatch(action)`를 통해 상태를 업데이트할 수 있다.
4. `subscribe(listener)`를 통해 리스너를 등록할 수 있다.
5. `subscribe(listener)`에 의해 반환된 함수를 호출함으로써 리스너의 등록 취소를 할 수 있다.

```js
import { createStore } from 'redux';
import todoReducer from './todo/reducers';

const store = createStore(todoReducer);
```

## Redux 구현해보기

다음과 같은 `Todo` 애플리케이션을 구현하고자 한다.

<div id="redux-tutorial"></div>

파일 구조도는 다음과 같다.
```
src
├── index.jsx
└── todo
    ├── Todo.jsx
    ├── TodoActionTypes.js
    ├── TodoActions.js
    ├── TodoAdder.jsx
    ├── TodoContainer.jsx
    ├── TodoItem.jsx
    └── TodoReducers.js
```

### 액션
먼저 액션 타입(동작 유형)들을 정의한다.<br />
아래에 정의된 동작을 발생하면, `리듀서`가 상태를 변경하게 된다.

```js
// src/todo/TodoActionTypes.js
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FAILED_TO_ADD_TODO = 'FAILED_TO_ADD_TODO';
```

`액션`은 액션을 설명하는 객체를 전달한다.<br />
(액션 타입을 상수로 만듦으로써 오타를 방지할 수 있다.
`{ type: 'ADDD_TODO', todo }`와 같이 액션 타입을 문자열로 직접 전달하게 되면, 예상하지 못한 버그가 발생할 것이다.

```js
// src/todo/TodoActions.js
import fp from 'lodash/fp';
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FAILED_TO_ADD_TODO,
} from './TodoActionTypes';

export const addTodo = todo =>
  (dispatch, getState) => {
    const state = getState();
    const { todos } = state;

    if (fp.isEmpty(fp.find({ todo })(todos))) {
      return dispatch({
        type: ADD_TODO,
        todo,
      });
    }

    return dispatch({
      type: FAILED_TO_ADD_TODO,
    });
  };

export const removeTodo = index =>
  dispatch =>
    dispatch({
      type: REMOVE_TODO,
      index,
    });

export const toggleTodo = index =>
  dispatch =>
    dispatch({
      type: TOGGLE_TODO,
      index,
    });
```

### 리듀서
위에서 언급했듯이, `리듀서`에서는 부작용을 일으키면 안 된다. 전달받은 이전의 상태값을 통해 새로운 상태값을 만들어 반환해야 한다.

```js
// src/todo/TodoReducers.js
import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  FAILED_TO_ADD_TODO,
} from './TodoActionTypes';

const todoReducers = (state = [], { type, ...action }) => {
  switch (type) {
    case ADD_TODO: {
      const { todo } = action;

      return [
        ...state,
        { todo, done: false },
      ];
    }
    case REMOVE_TODO: {
      const { index } = action;
      const length = state.length;

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1, length),
      ];
    }
    case TOGGLE_TODO: {
      const { index } = action;
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
    }
    case FAILED_TO_ADD_TODO:
      alert('중복된 아이템입니다.'); // eslint-disable-line
      return state;
    default:
      return state;
  }
};

export default todoReducers;
```

### 메인 파일과 컴퍼넌트들
`redux`의 `combineReducer`는 이름 그대로 모든 `리듀서`를 결합하여 하나의 `스토어`로 결합한다.<br />
`react-redux`의 `Provider`에 `store`를 설정하면, 그 하위 컴퍼넌트들에게 따로 전달해주지 않아도 `connect`될 때, `store`에 접근할 수 있다.

```js
// src/index.jsx
import React, { PureComponent } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TodoContainer from './todo/TodoContainer';
import TodoReducers from './todo/TodoReducers';

const reducers = combineReducers({ todos: TodoReducers });
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

render(
  <Provider store={store}>
    <TodoContainer />
  </Provider>,
  document.getElementById('root')
);
```

### Container 컴퍼넌트 (Smart 컴퍼넌트)
`컨테이너 컴퍼넌트`는 애플리케이션의 상태와 직접 상호작용하는 컴퍼넌트이다.<br />
`store`에 접근할 수 있으며, `action`을 전달하거나 현재 상태를 가져올 수 있다.

`connect`는 리액트의 컴퍼넌트와 리덕스의 `store`를 연결해준다. 전달받는 인자는 아래와 같으며, 전달하지 않아도 무방하다.

- `mapStateToProps` : `store`의 상태를 `props`로 전달한다.
- `mapDispatchToProps` : 컴퍼넌트의 `props`로 전달된 함수를 실행할 때, 특정한 `action`을 전달하도록 한다.


```js
// src/todo/TodoContainer.jsx
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from './TodoActions';
import Todo from './Todo';

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
```

### Presentational 컴퍼넌트 (Dumb 컴퍼넌트)
`Presentational 컴퍼넌트`는 하위 컴퍼넌트를 가지지만, `store`와 상호작용하지는 않는다.

```js
// src/todo/Todo.jsx
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fp from 'lodash/fp';
import TodoItem from './TodoItem';
import TodoAdder from './TodoAdder';

export default class Todo extends PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({ todo: PropTypes.string, done: PropTypes.bool })).isRequired,
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, addTodo, removeTodo, toggleTodo } = this.props;

    return (
      <div>
        <TodoAdder addTodo={addTodo} />
        <ul>
          {fp.map(({ todo, done }) => {
            const index = fp.findIndex({ todo })(todos);

            return (
              <TodoItem
                key={todo}
                index={index}
                todo={todo}
                done={done}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            );
          })(todos)}
        </ul>
      </div>
    );
  }
}
```

```js
// src/todo/TodoItem.jsx
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  render() {
    const { index, todo, done, toggleTodo, removeTodo } = this.props;

    return (
      <li>
        <input
          id={`check-${todo}`}
          type="checkbox"
          defaultChecked={done}
          style={{ cursor: 'pointer' }}
          onClick={() => { toggleTodo(index); }}
        />
        <label htmlFor={`check-${todo}`} style={{ margin: '0 20px 0 10px', cursor: 'pointer' }}>
          {todo}
        </label>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => { removeTodo(index); }}
        >
          X
        </button>
      </li>
    );
  }
}
```

```js
// src/todo/TodoAdder.jsx
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoAdder extends PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = this.$input.value;

    if (todo) {
      this.props.addTodo(todo);
      this.$input.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <input
            ref={($input) => {
              this.$input = $input;
            }}
            type="text"
          />
          <button>Add</button>
        </fieldset>
      </form>
    );
  }
}
```

## 참조
- [Redux github repository](https://github.com/reactjs/redux)
