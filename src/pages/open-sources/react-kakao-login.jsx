import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import KakaoLogin from 'react-kakao-login';
import * as appActions from '~/store/app/actions';
import Layout from '~/components/Layout';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.scss';

/* eslint-disable no-alert */
const ReactKakaoLogin = ({
  historyGoBack,
}) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | REACT KAKAO LOGIN</title>
      <meta name="og:title" content="WONISM | REACT KAKAO LOGIN" />
    </Helmet>
    <Repository username="wonism" repos="react-kakao-login" />
    <br />
    <br />
    <div>
      <KakaoLogin
        jsKey="b1e7775aab8c44df50a6c46eae9dcae3"
        onSuccess={() => { alert('Succes'); }}
        onFailure={() => { alert('Failed'); }}
      />
    </div>
    <br /><br />
    <button onClick={historyGoBack}>← Go back</button>
    <br /><br />
  </OpenSourceWrapper>
);
/* eslint-enable no-alert */

ReactKakaoLogin.propTypes = {
  historyGoBack: func.isRequired,
};

const ConnectedReactKakaoLogin = connect(
  () => ({}),
  {
    historyGoBack: appActions.historyGoBack,
  }
)(ReactKakaoLogin);

const ReactKakaoLoginLayout = props => (
  <Layout {...props}>
    <ConnectedReactKakaoLogin />
  </Layout>
);

export default ReactKakaoLoginLayout;
