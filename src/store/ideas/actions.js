import {
  FETCH_IDEAS,
  SET_IDEAS_MENU,
} from './actionTypes';

export const fetchIdeas = () =>
  dispatch =>
    dispatch({
      type: FETCH_IDEAS,
    });

export const setIdeasMenu = menu =>
  dispatch =>
    dispatch({
      type: SET_IDEAS_MENU,
      menu,
    });
