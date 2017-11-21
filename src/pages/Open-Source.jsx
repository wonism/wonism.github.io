import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import GoogleAds from 'react-google-ads';
import { Repository } from 'react-github-info';
import './open-sources.scss';

const OpenSource = ({
  data,
}) => {
  const siteTitle = fp.get('site.siteMetadata.title')(data);

  return (
    <div className="main-container">
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="keyword" content="JavaScript, Front-end, Developer" />
        <meta name="og:title" content={siteTitle} />
      </Helmet>
      <ul className="open-sources">
        <li>
          <Link to="/easy-map">
            <Repository username="wonism" repos="easy-map" renderOnly />
          </Link>
        </li>
        <li>
          <Link to="/react-google-ads">
            <Repository username="wonism" repos="react-google-ads" renderOnly />
          </Link>
        </li>
        <li>
          <Link to="/react-kakao-login">
            <Repository username="wonism" repos="react-kakao-login" renderOnly />
          </Link>
        </li>
        <li>
          <Link to="/react-github-info">
            <Repository username="wonism" repos="react-github-info" renderOnly />
          </Link>
        </li>
      </ul>
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%' }}
      />
    </div>
  );
};

OpenSource.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default OpenSource;

/* eslint-disable no-undef */
export const openSourceQuery = graphql`
  query OpenSourceQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
/* eslint-enable no-undef */
