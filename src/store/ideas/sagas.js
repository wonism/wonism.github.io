import { call, put } from 'redux-saga/effects';
import * as Api from '~/store/api';
import {
  FETCH_IDEAS_SUCCESS,
  FETCH_IDEAS_FAILED,
} from './actionTypes';

function* fetchIdeas() {
  try {
    const response = yield call(Api.fetchData, {
      url: 'https://api.github.com/repos/wonism/ideas/contents/main.json',
    });

    if (response.status >= 200 && response.status < 300) {
      const result = yield response.json();
      const { data } = result;

      yield put({ type: FETCH_IDEAS_SUCCESS, data });
    } else {
      throw response.json();
    }
  } catch (e) {
    yield put({ type: FETCH_IDEAS_FAILED });
  }
}

export { fetchIdeas, fetchIdeas as default };
