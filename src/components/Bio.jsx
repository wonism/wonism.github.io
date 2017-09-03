import React from 'react';

import './bio.scss';

const Bio = () => (
  <p className="bio">
    <a href="https://github.com/wonism">
      <img
        src="https://avatars3.githubusercontent.com/u/13835762?v=4&s=460"
        alt="wonism"
        target="_blank"
        rel="noreferrer noopener"
      />
      <span>
        Front-end developer
        <br />
        <small>Interested in ReactJS, RxJS and Web assembly.</small>
      </span>
    </a>
  </p>
);

export default Bio;
