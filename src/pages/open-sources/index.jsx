import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import { Repository } from 'react-github-info';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

const OpenSource = () => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | Open Sources</title>
      <meta name="og:title" content="WONISM | Open Sources" />
    </Helmet>
    <ul>
      <li>
        <Link to="/open-sources/easy-map">
          <Repository username="wonism" repos="easy-map" renderOnly />
        </Link>
        <br /><br />
      </li>
      <li>
        <Link to="/open-sources/react-google-ads">
          <Repository username="wonism" repos="react-google-ads" renderOnly />
        </Link>
        <br /><br />
      </li>
      <li>
        <Link to="/open-sources/react-kakao-login">
          <Repository username="wonism" repos="react-kakao-login" renderOnly />
        </Link>
        <br /><br />
      </li>
      <li>
        <Link to="/open-sources/react-github-info">
          <Repository username="wonism" repos="react-github-info" renderOnly />
        </Link>
        <br /><br />
      </li>
    </ul>
  </OpenSourceWrapper>
);

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
