import fp from 'lodash/fp';
import {
  OPEN_HAMBURGER,
  CLOSE_HAMBURGER,
  INPUT_SEARCH,
  CLOSE_SEARCH,
} from './HeaderActionTypes';

export default {
  [OPEN_HAMBURGER]: fp.set('isHamburgerOpened', true),
  [CLOSE_HAMBURGER]: fp.set('isHamburgerOpened', false),
  [INPUT_SEARCH]: (state, { input }) => fp.set('searchKeywords', input)(state),
}
