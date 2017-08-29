import React, { Component } from 'react';
import fp from 'lodash/fp';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import Instafeed from 'instafeed.js';

import './photos.scss';

export default class Photos extends Component {
  constructor(props) {
    super(props);

    this.feed = new Instafeed({
      get: 'user',
      userId: 'self',
      target: 'instafeed',
      limit: 20,
      resolution: 'standard_resolution',
      accessToken: '1591191525.212f7be.ef028729cb9c4722bb04fc76b6515088',
      clientId: '212f7be0b6d643318eda9413aecb1cf3',
      template: `
        <figure class="insta-card">
          <a href="{{link}}" target="_blank">
            <img class="insta-card-image" src="{{image}}" />
          </a>
        </figure>
      `,
      /*
      after: function () {
        if (this.hasNext()) { }
      }
      */
    });
  }

  componentDidMount() {
    this.feed.run();
  }

  render() {
    return (
      <div className="main-container">
        <Helmet>
          <title>HI</title>
          <meta name="og:title" content={"HI"} />
        </Helmet>
        <section className="instafeed" id="instafeed" />
        <GoogleAds
          client="ca-pub-1777052704513089"
          slot="4491507809"
          style={{ display: 'inline-block', width: '100%', }}
        />
      </div>
    );
  }
};
