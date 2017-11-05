import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import GoogleAds from 'react-google-ads';
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
