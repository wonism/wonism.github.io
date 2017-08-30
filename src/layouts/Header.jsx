import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

import './header.scss';

const Header = () => (
  <header className="header">
    <Link className="main" to="/">Wonism</Link>
    <nav>
      <ul className="list-layout">
        <li>
          <Link to="/pages/1">Posts</Link>
        </li>
        {/**
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        */}
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/photo">Photo</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
