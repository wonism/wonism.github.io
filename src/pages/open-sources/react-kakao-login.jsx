import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import KakaoLogin from 'react-kakao-login';
import { historyGoBack } from '~/store/app/actions';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

const ReactKakaoLogin = ({
  historyGoBack,
}) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | React Kakao Login</title>
      <meta name="og:title" content="WONISM | React Kakao Login" />
    </Helmet>
    <Repository username="wonism" repos="react-kakao-login" />
    <br />
    <br />
    <div>
      <KakaoLogin
        jsKey="b1e7775aab8c44df50a6c46eae9dcae3"
        onSuccess={() => { alert('Succes');}}
        onFailure={() => { alert('Failed');}}
      />
    </div>
    <br /><br />
    <button onClick={historyGoBack}>← Go back</button>
    <br /><br />
  </OpenSourceWrapper>
);

export default connect(
  () => ({}),
  {
    historyGoBack,
  }
)(ReactKakaoLogin);

/* eslint-disable no-undef */
export const kakaoLoginQuery = graphql`
  query KakaoLoginQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
/* eslint-enable no-undef */
