import { INIT_COPY, LOAD_DISQUS_SCRIPT } from './actionTypes';

export default (store) => {
  store.dispatch({
    type: INIT_COPY,
  });

  return store;
};
