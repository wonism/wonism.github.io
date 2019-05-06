import React  from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import Layout from '~/components/Layout';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.scss';

const OpenSource = () => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | OPEN SOURCES</title>
      <meta name="og:title" content="WONISM | OPEN SOURCES" />
    </Helmet>
    <ul>
      <li>
        <Link to="/open-sources/gatsby-advanced-blog">
          <Repository username="wonism" repos="gatsby-advanced-blog" renderOnly />
        </Link>
        <br /><br />
      </li>
      <li>
        <Link to="/open-sources/react-instagram-feed">
          <Repository username="wonism" repos="react-instagram-feed" renderOnly />
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
      <li>
        <Link to="/open-sources/react-mail-form">
          <Repository username="wonism" repos="react-mail-form" renderOnly />
        </Link>
        <br /><br />
      </li>
      <li>
        <Link to="/open-sources/easy-map">
          <Repository username="wonism" repos="easy-map" renderOnly />
        </Link>
        <br /><br />
      </li>
    </ul>
  </OpenSourceWrapper>
);

const OpenSourceLayout = props => (
  <Layout {...props}>
    <OpenSource />
  </Layout>
);

export default OpenSourceLayout;
