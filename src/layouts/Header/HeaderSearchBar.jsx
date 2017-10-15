import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import fp from 'lodash/fp';

const HeaderSearchBar = ({
  inHamburger,
  searchKeywords,
  resultsOfSearch,
  hasResultsOfSearch,
  inputSearch,
  toggleHamburger,
}) => (
  <nav className="search-bar-wrapper">
    {inHamburger ? null : [
      <input
        key="trigger"
        className="searchbar-trigger none"
        id="searchbar-trigger"
        type="checkbox"
        defaultChecked={false}
      />,
      <label
        key="button"
        className="magnifier"
        htmlFor="searchbar-trigger"
        role="button"
        tabIndex="0"
      >
        <i className="fa fa-search" />
      </label>,
    ]}
    <div className="search-bar-contents">
      <input
        className="search-bar"
        type="search"
        autoComplete="false"
        value={searchKeywords}
        onChange={(e) => { inputSearch(e.target.value); }}
      />
    </div>
    {hasResultsOfSearch ? (
      <ul className="list-layout search-results">
        {fp.map(({ path, title, category }) => (
          <li key={path}>
            <Link
              className="main"
              to={path}
              onClick={() => {
                inputSearch('');
                toggleHamburger();
              }}
            >
              <strong>
                {title}
              </strong>
              <br />
              <i className="fa fa-list" />
              <span>
                {category}
              </span>
            </Link>
          </li>
        ))(resultsOfSearch)}
      </ul>
    ) : null}
  </nav>
);

HeaderSearchBar.propTypes = {
  inHamburger: PropTypes.bool,
  searchKeywords: PropTypes.string.isRequired,
  resultsOfSearch: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hasResultsOfSearch: PropTypes.bool.isRequired,
  inputSearch: PropTypes.func.isRequired,
  toggleHamburger: PropTypes.func.isRequired,
};

HeaderSearchBar.defaultProps = {
  inHamburger: false,
};

export default HeaderSearchBar;
