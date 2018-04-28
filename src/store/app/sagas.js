import { call, put } from 'redux-saga/effects';
// import { delay } from 'redux-saga';
import { navigateTo } from 'gatsby-link';
// import fp from 'lodash/fp';
import {
  HISTORY_GO_BACK_SUCCESS,
  HISTORY_GO_BACK_FAILED,
  PRINT_SUCCESS,
  PRINT_FAILED,
  INPUT_KEYWORD,
} from './actionTypes';

export function* historyGoBack() {
  try {
    yield call(() => {
      global.history.go(-1);
    });

    yield put({ type: HISTORY_GO_BACK_SUCCESS });
  } catch (e) {
    yield call(() => { alert('can not access the history API'); }); // eslint-disable-line no-alert
    yield put({ type: HISTORY_GO_BACK_FAILED });
  }
}

export function* navigateToPath({ path }) {
  yield put({ type: INPUT_KEYWORD, input: '' });
  yield call(() => {
    navigateTo(path);
  });
}

export function* printPage() {
  try {
    yield call(() => {
      global.print();
    });
    yield put({ type: PRINT_SUCCESS });
  } catch (e) {
    yield put({ type: PRINT_FAILED });
  }
}

export function* openMenu() {
  yield call(() => {
    global.document.body.classList.add('menu-opened');
  });
}

export function* closeMenu() {
  yield call(() => {
    global.document.body.classList.remove('menu-opened');
  });
}
