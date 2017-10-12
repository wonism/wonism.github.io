import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const HeaderGnbSingleMenu = ({
  title,
  to,
  toggleHamburger,
}) => (
  <li>
    <Link
      to={to}
      tabIndex="0"
      role="button"
      onClick={toggleHamburger}
    >
      {title}
    </Link>
  </li>
);

HeaderGnbSingleMenu.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  toggleHamburger: PropTypes.func.isRequired,
};
