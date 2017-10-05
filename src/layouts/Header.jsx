import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import fp from 'lodash/fp';
import * as logo from '../resources/logo.png';

import './header.scss';

const Header = ({ categories }) => {
  let hamburgerTrigger$;
  const closeGnb = () => {
    hamburgerTrigger$.checked = false;
  };

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
      <nav className="gnb">
        <ul className="list-layout">
          <li>
            <Link to="/pages/1">Posts <i className="fa fa-caret-down" /></Link>
            {categories.length ? (
              <ul className="list-layout sub-menus">
                {fp.map(category => (
                  [
                    <li key={category}>
                      <Link to={fp.isEqual('All')(category.key) ? '/pages/1' : `/categories/${category.key}`}>
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
            <Link to="/portfolios">Portfolio</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/photos">Photos</Link>
          </li>
        </ul>
      </nav>
      <input
        className="hamburger-trigger"
        id="hamburger-trigger"
        type="checkbox"
        ref={(hamburgerTrigger) => { hamburgerTrigger$ = hamburgerTrigger; }}
      />
      <label
        className="hamburger"
        htmlFor="hamburger-trigger"
        role="button"
        tabIndex="0"
        onClick={() => {}}
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
                        onClick={closeGnb}
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
              onClick={closeGnb}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              tabIndex="0"
              role="button"
              onClick={closeGnb}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/photos"
              tabIndex="0"
              role="button"
              onClick={closeGnb}
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
        onClick={() => {}}
      />
    </header>
  );
};

Header.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    length: PropTypes.number,
  }).isRequired),
};

Header.defaultProps = {
  categories: [],
};

export default Header;
