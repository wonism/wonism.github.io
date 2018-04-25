import { createSelector } from 'reselect';
import fp from 'lodash/fp';

const getIdeasSubState = fp.get('ideas');

export const getMenu = createSelector(
  getIdeasSubState,
  fp.get('menu')
);

export const getData = createSelector(
  getIdeasSubState,
  fp.get('data')
);

export const isFailed = createSelector(
  getIdeasSubState,
  fp.get('failed')
);
