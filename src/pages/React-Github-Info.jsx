import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import GoogleAds from 'react-google-ads';
import { Profile, Repository } from 'react-github-info';
import './open-sources.scss';

const Github = ({
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
      <Repository className="react-github-info--component" username="wonism" repos="react-github-info" />
      <br />
      <br />
      <Profile className="react-github-info--component" username="wonism" />
      <br />
      <Repository className="react-github-info--component" username="wonism" repos="react-github-info" />
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%' }}
      />
    </div>
  );
};

Github.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Github;

/* eslint-disable no-undef */
export const githubQuery = graphql`
  query GithubQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
/* eslint-enable no-undef */
