import React from 'react';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import KakaoLogin from 'react-kakao-login';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

const ReactKakaoLogin = () => (
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
  </OpenSourceWrapper>
);

export default ReactKakaoLogin;

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
