import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './header.scss';

const Header = () => {
  let hamburgerTrigger$;
  const closeGnb = () => {
    hamburgerTrigger$.checked = false;
  };

  return (
    <header className="header">
      <Link className="main" to="/">Wonism</Link>
      <nav className="gnb">
        <ul className="list-layout">
          <li>
            <Link to="/pages/1">Posts</Link>
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
      >
        <span className="hamburger-inner" />
      </label>
      <nav className="mobile-gnb">
        <ul className="list-layout">
          <li>
            <Link
              to="/pages/1"
              onClick={closeGnb}
            >
              Posts
            </Link>
          </li>
          <li>
            <Link
              to="/portfolios"
              onClick={closeGnb}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              onClick={closeGnb}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              to="/photos"
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
      />
    </header>
  );
};

export default Header;
