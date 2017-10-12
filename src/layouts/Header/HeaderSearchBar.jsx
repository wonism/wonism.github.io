import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import fp from 'lodash/fp';

const HeaderSearchBar = ({
  searchKeywords,
  urlInformations,
  resultsOfSearch,
  hasResultsOfSearch,
  inputSearch,
}) => (
  <nav className="search-bar-wrapper">
    <input
      className="searchbar-trigger none"
      id="searchbar-trigger"
      type="checkbox"
      defaultChecked={false}
    />
    <label
      className="magnifier"
      htmlFor="searchbar-trigger"
      role="button"
      tabIndex="0"
    >
      <i className="fa fa-search" />
    </label>
    <div className="search-bar-contents">
      <input
        className="search-bar"
        type="search"
        autoComplete="false"
        value={searchKeywords}
        onChange={(e) => { inputSearch(e.target.value); }}
      />
      {hasResultsOfSearch ? (
        <ul className="list-layout search-results">
          {fp.map(({ path, title, category, tags }) => {
            return (
              <li key={path}>
                <Link className="main" to={path}>
                  {title}{category}{tags}
                </Link>
              </li>
            );
          })(resultsOfSearch)}
        </ul>
      ) : null}
    </div>
  </nav>
);

HeaderSearchBar.propTypes = {
  searchKeywords: PropTypes.string.isRequired,
  urlInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  resultsOfSearch: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hasResultsOfSearch: PropTypes.bool.isRequired,
  inputSearch: PropTypes.func.isRequired,
};

export default HeaderSearchBar;
