import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import fp from 'lodash/fp';
import HeaderGnb from './HeaderGnb';
import HeaderSearchBar from './HeaderSearchBar';
import * as logo from '../../resources/logo.png';

import '../header.scss';

const Header = ({
  isHamburgerOpened,
  categories,
  urlInformations,
  resultsOfSearch,
  hasResultsOfSearch,
  searchKeywords,
  toggleHamburger,
  inputSearch,
}) => {
  return (
    <header className="header">
      <Link className="main" to="/">
        <img
          src={logo.default}
          alt="logo"
          width="100"
          height="18"
        />
      </Link>
      <HeaderGnb categories={categories} />
      <div className="none">
        <HeaderSearchBar
          urlInformations={urlInformations}
          resultsOfSearch={resultsOfSearch}
          hasResultsOfSearch={hasResultsOfSearch}
          searchKeywords={searchKeywords}
          inputSearch={inputSearch}
        />
      </div>
      <input
        className="hamburger-trigger"
        id="hamburger-trigger"
        type="checkbox"
        checked={isHamburgerOpened}
      />
      <label
        className="hamburger"
        htmlFor="hamburger-trigger"
        role="button"
        tabIndex="0"
        onClick={toggleHamburger}
      >
        <span className="hamburger-inner" />
      </label>
      <nav className="mobile-gnb">
        <ul className="list-layout">
          <li>
            <input
              className="none hamburger-posts-opener"
              type="checkbox"
              id="hamburger-posts-opener"
            />
            <label
              tabIndex="0"
              role="button"
              htmlFor="hamburger-posts-opener"
            >
              Posts <i className="fa fa-caret-down" /><i className="fa fa-caret-up" />
            </label>
            {categories.length ? (
              <ul className="list-layout sub-menus mobile">
                {fp.map(category => (
                  [
                    <li key={category}>
                      <Link
                        to={fp.isEqual('All')(category.key) ? '/pages/1' : `/categories/${category.key}`}
                        tabIndex="0"
                        role="button"
                        onClick={toggleHamburger}
                      >
                        {category.key} ({category.length})
                      </Link>
                    </li>,
                    <br key={`${category.key}-br`} />,
                  ]
                ))(categories)}
              </ul>
            ) : null}
          </li>
          <li>
            <Link
              to="/portfolios"
              tabIndex="0"
              role="button"
              onClick={toggleHamburger}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              tabIndex="0"
              role="button"
              onClick={toggleHamburger}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/photos"
              tabIndex="0"
              role="button"
              onClick={toggleHamburger}
            >
              Photos
            </Link>
          </li>
        </ul>
      </nav>
      <label
        className="mobile-gnb-background"
        htmlFor="hamburger-trigger"
        role="button"
        tabIndex="0"
        onClick={toggleHamburger}
      />
    </header>
  );
};

Header.propTypes = {
  isHamburgerOpened: PropTypes.bool.isRequired,
  urlInformations: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  resultsOfSearch: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  hasResultsOfSearch: PropTypes.bool.isRequired,
  toggleHamburger: PropTypes.func.isRequired,
  inputSearch: PropTypes.func.isRequired,
  ...HeaderGnb.propTypes,
};

Header.defaultProps = {
  categories: [],
};

export default Header;
