import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import GoogleAds from 'react-google-ads';
import { Repository } from 'react-github-info';
import KakaoLogin from 'react-kakao-login';
import './open-sources.scss';

const ReactKakaoLogin = ({
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
      <Repository className="react-github-info--component" username="wonism" repos="react-kakao-login" />
      <br />
      <br />
      <div className="text-center">
        <KakaoLogin
          jsKey="4a5607f2dc1622d91b7137fff35a464d"
          onSuccess={() => {}}
          onFailure={() => {}}
        />
      </div>
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%' }}
      />
    </div>
  );
};

ReactKakaoLogin.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default ReactKakaoLogin;

/* eslint-disable no-undef */
export const kakaoLoginQuery = graphql`
  query KakaoLoginQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
/* eslint-enable no-undef */
