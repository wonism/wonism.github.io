import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import GoogleAds from 'react-google-ads';
import { Repository } from 'react-github-info';
import './open-sources.scss';

const ReactGoogleAds = ({
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
      <Repository className="react-github-info--component" username="wonism" repos="react-google-ads" />
      <br />
      <br />
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%' }}
      />
    </div>
  );
};

ReactGoogleAds.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ReactGoogleAds;

/* eslint-disable no-undef */
export const GoogleAdsQuery = graphql`
  query googleAdsQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
/* eslint-enable no-undef */
