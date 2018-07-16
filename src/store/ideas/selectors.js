import { createSelector } from 'reselect';
import { get } from 'lodash/fp';

const getIdeasSubState = get('ideas');

export const getMenu = createSelector(
  getIdeasSubState,
  get('menu')
);

export const getData = createSelector(
  getIdeasSubState,
  get('data')
);

export const isFailed = createSelector(
  getIdeasSubState,
  get('failed')
);
