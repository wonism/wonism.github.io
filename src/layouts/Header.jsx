import React from 'react';
import Link from 'gatsby-link';
import * as logo from '../resources/logo.png';

import './header.scss';

const Header = () => {
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
        onClick={() => {}}
      >
        <span className="hamburger-inner" />
      </label>
      <nav className="mobile-gnb">
        <ul className="list-layout">
          <li>
            <Link
              to="/pages/1"
              tabIndex="0"
              role="button"
              onClick={closeGnb}
            >
              Posts
            </Link>
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

export default Header;
