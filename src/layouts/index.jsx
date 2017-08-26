import React from 'react';
import Header from './Header';
import scrollTop from '../utils/scroll';

import './index.scss';
import './main.scss';

const Template = ({ children }) => (
  <div>
    <Header />
    <main className="container">
      {children()}
    </main>
    <nav className="to-top">
      <button onClick={() => { scrollTop(400); }}>↑</button>
    </nav>
  </div>
);

Template.propTypes = {
  children: React.PropTypes.func.isRequired,
  // location: React.PropTypes.shape({}).isRequired,
  // route: React.PropTypes.shape({}).isRequired,
};

export default Template;
