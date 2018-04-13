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
    const { length } = state;

    return [
      ...state.slice(0, index),
      ...state.slice(index + 1, length),
    ];
  },
  [TOGGLE_TODO]: (state, { index }) => {
    const { length } = state;
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
};
