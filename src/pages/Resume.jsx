import React from 'react';
import fp from 'lodash/fp';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import * as profileUrl from '../resources/me.jpg';

const Resume = () => {
  return (
    <section className="resume">
      <section className="basic-infos">
        <img
          className="profile-picture"
          src={profileUrl.default}
          alt="wonism"
        />
        <h1>Jaewon Kim</h1>
        <p>yocee57@gmail.com</p>
      </section>
      <section className="social-networks">
        <a href="https://github.com/wonism"><i className="fa fa-github" /></a>
        <a href="https://twitter.com/j1ism"><i className="fa fa-twitter" /></a>
        <a href="https://www.facebook.com/j1.chic"><i className="fa fa-facebook" /></a>
        <a href="https://www.linkedin.com/in/jaewon-kim-812815108/"><i className="fa fa-linkedin" /></a>
      </section>
    </section>
  );
};

export default Resume;
