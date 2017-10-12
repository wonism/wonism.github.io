import fp from 'lodash/fp';
import {
  OPEN_HAMBURGER,
  CLOSE_HAMBURGER,
  INPUT_SEARCH,
  CLOSE_SEARCH,
} from './HeaderActionTypes';
import * as HeaderSelectors from './HeaderSelectors';

export const toggleHamburger = () =>
  (dispatch, getState) => {
    const state = getState();
    const isHamburgerOpened = HeaderSelectors.isHamburgerOpened(state);
    const type = isHamburgerOpened ? CLOSE_HAMBURGER : OPEN_HAMBURGER;

    return dispatch({
      type,
    });
  };

export const inputSearch = input =>
  dispatch =>
    dispatch({
      type: INPUT_SEARCH,
      input,
    });

export const closeSearch = () =>
  dispatch =>
    dispatch({
      type: CLOSE_SEARCH,
    });
