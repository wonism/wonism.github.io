import React from 'react';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import { Repository } from 'react-github-info';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

const ReactGoogleAds = () => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | React Google Ads</title>
      <meta name="og:title" content="WONISM | React Google Ads" />
    </Helmet>
    <Repository username="wonism" repos="react-google-ads" />
    <br />
    <br />
    <GoogleAds
      client="ca-pub-9697962278873792"
      slot="4491507809"
      style={{ display: 'inline-block', width: '100%' }}
    />
  </OpenSourceWrapper>
);

export default ReactGoogleAds;

/* eslint-disable no-undef */
export const GoogleAdsQuery = graphql`
  query googleAdsQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
/* eslint-enable no-undef */
