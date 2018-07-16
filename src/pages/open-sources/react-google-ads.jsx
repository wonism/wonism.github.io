/** @jsx createElement */
import { createElement } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import { Repository } from 'react-github-info';
import * as appActions from '~/store/app/actions';
import Layout from '~/components/Layout';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.scss';

const ReactGoogleAds = ({
  historyGoBack,
}) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | REACT GOOGLE ADS</title>
      <meta name="og:title" content="WONISM | REACT GOOGLE ADS" />
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
  historyGoBack: func.isRequired,
};

const ConnectedReactGoogleAds = connect(
  () => ({}),
  {
    historyGoBack: appActions.historyGoBack,
  }
)(ReactGoogleAds);

const ReactGoogleAdsLayout = props => (
  <Layout {...props}>
    <ConnectedReactGoogleAds />
  </Layout>
);

export default ReactGoogleAdsLayout;
