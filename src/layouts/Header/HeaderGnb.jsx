import PropTypes from 'prop-types';
import React from 'react';
import Link from 'gatsby-link';
import fp from 'lodash/fp';

const HeaderGnb = ({ categories }) => (
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
        <Link to="/open-source">Open Source</Link>
      </li>
      <li>
        <Link to="/resume">Resume</Link>
      </li>
      <li>
        <Link to="/photos">Photos</Link>
      </li>
    </ul>
  </nav>
);

HeaderGnb.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    length: PropTypes.number,
  }).isRequired).isRequired,
};

export default HeaderGnb;
