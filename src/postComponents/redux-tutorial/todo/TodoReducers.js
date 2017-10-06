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
