import fp from 'lodash/fp';
import {
  FETCH_IDEAS,
  FETCH_IDEAS_SUCCESS,
  FETCH_IDEAS_FAILED,
  SET_IDEAS_MENU,
} from './actionTypes';

export default {
  [FETCH_IDEAS]: fp.set('failed', false),
  [FETCH_IDEAS_SUCCESS]: (state, { data }) => fp.flow(
    fp.set('data', data),
    fp.set('failed', false),
  )(state),
  [FETCH_IDEAS_FAILED]: fp.flow(
    fp.set('data', null),
    fp.set('failed', true)
  ),
  [SET_IDEAS_MENU]: (state, { menu }) => fp.set('menu', menu)(state),
};
