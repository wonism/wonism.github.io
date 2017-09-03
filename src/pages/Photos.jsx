import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import GoogleAds from 'react-google-ads';
import Instafeed from 'instafeed.js';

import './photos.scss';

export default class Photos extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  };

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
          <a href="{{link}}" target="_blank" rel="noreferrer noopener">
            <img class="insta-card-image" src="{{image}}" />
          </a>
        </figure>
      `,
      after: function () {
        console.log('load successfully');
      }
    });
  }

  componentDidMount() {
    this.feed.run();
  }

  render() {
    const { data } = this.props;
    const siteTitle = fp.get('site.siteMetadata.title')(data);

    return (
      <div className="main-container">
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="keyword" content="JavaScript, Front-end, Developer" />
          <meta name="og:title" content={siteTitle} />
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

/* eslint-disable no-undef */
export const photoQuery = graphql`
  query PhotoQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
/* eslint-enable no-undef */
