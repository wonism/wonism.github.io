import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import { Repository } from 'react-github-info';
import { historyGoBack } from '~/store/app/actions';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.less';

const ReactGoogleAds = ({
  historyGoBack,
}) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | React Google Ads</title>
      <meta name="og:title" content="WONISM | React Google Ads" />
    </Helmet>
    <Repository username="wonism" repos="react-google-ads" />
    <br /><br />
    <GoogleAds
      client="ca-pub-9697962278873792"
      slot="4491507809"
      style={{ display: 'inline-block', width: '100%' }}
    />
    <br /><br />
    <button onClick={historyGoBack}>← Go back</button>
    <br /><br />
  </OpenSourceWrapper>
);

ReactGoogleAds.propTypes = {
  historyGoBack: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    historyGoBack,
  }
)(ReactGoogleAds);

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
