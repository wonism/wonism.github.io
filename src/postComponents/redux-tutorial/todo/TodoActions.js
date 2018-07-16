import { isEmpty, find } from 'lodash/fp';
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

    if (isEmpty(find({ todo })(todos))) {
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
