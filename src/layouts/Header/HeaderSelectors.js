import { createSelector } from 'reselect';
import fp from 'lodash/fp';

const getHeader = fp.get('header');

export const isHamburgerOpened = createSelector(
  getHeader,
  fp.get('isHamburgerOpened')
);

export const getCategories = createSelector(
  getHeader,
  fp.get('categories')
);

export const getUrlInformations = createSelector(
  getHeader,
  fp.get('urlInformations')
);

export const getSearchKeywords = createSelector(
  getHeader,
  fp.get('searchKeywords')
);

export const getResultsOfSearch = createSelector(
  getSearchKeywords,
  getUrlInformations,
  (keywords = '', informations) => {
    if (!keywords) {
      return [];
    }

    return fp.filter(({ category = '', title = '', tags = [] }) => {
      const c = fp.toLower(category);
      const t = fp.toLower(title);
      const g = fp.map(fp.toLower)(tags);

      const searchedWithCategory = c.search(keywords) !== -1;
      const searchedWithTitle = t.search(keywords) !== -1;
      const searchedWithTags = fp.flow(
        fp.filter(tag => (tag.search(keywords) !== -1)),
        (filtered) => !fp.isEmpty(filtered)
      )(g);

      return searchedWithCategory || searchedWithTitle || searchedWithTags;
    })(informations);
  }
);

export const hasResultsOfSearch = createSelector(
  getResultsOfSearch,
  results => !fp.isEmpty(results)
);
