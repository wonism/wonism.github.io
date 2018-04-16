import React from 'react';
import Helmet from 'react-helmet';
import { Profile, Repository } from 'react-github-info';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

const Github = () => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | React Github Info</title>
      <meta name="og:title" content="WONISM | React Github Info" />
    </Helmet>
    <Repository username="wonism" repos="react-github-info" />
    <br /><br />
    <Profile username="wonism" />
    <br /><br />
    <Repository username="wonism" repos="react-github-info" />
  </OpenSourceWrapper>
);

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
