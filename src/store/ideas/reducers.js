import { flow, set } from 'lodash/fp';
import {
  FETCH_IDEAS,
  FETCH_IDEAS_SUCCESS,
  FETCH_IDEAS_FAILED,
  SET_IDEAS_MENU,
} from './actionTypes';

export default {
  [FETCH_IDEAS]: set('failed', false),
  [FETCH_IDEAS_SUCCESS]: (state, { data }) => flow(
    set('data', data),
    set('failed', false),
  )(state),
  [FETCH_IDEAS_FAILED]: flow(
    set('data', null),
    set('failed', true)
  ),
  [SET_IDEAS_MENU]: (state, { menu }) => set('menu', menu)(state),
};
