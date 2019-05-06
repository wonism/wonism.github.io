import React from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import * as appActions from '~/store/app/actions';
import Layout from '~/components/Layout';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.scss';

const GatsbyAdvancedBlog = ({ historyGoBack }) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | GATSBY ADVANCED BLOG</title>
      <meta name="og:title" content="WONISM | GATSBY ADVANCED BLOG" />
    </Helmet>
    <Repository username="wonism" repos="gatsby-advanced-blog" />
    <br /><br />
    <button onClick={historyGoBack}>← Go back</button>
    <br /><br />
  </OpenSourceWrapper>
);

GatsbyAdvancedBlog.propTypes = {
  historyGoBack: func.isRequired,
};

const ConnectedGatsbyAdvancedBlog = connect(
  () => ({}),
  {
    historyGoBack: appActions.historyGoBack,
  }
)(GatsbyAdvancedBlog);

const GatsbyAdvancedBlogLayout = props => (
  <Layout {...props}>
    <ConnectedGatsbyAdvancedBlog />
  </Layout>
);

export default GatsbyAdvancedBlogLayout;
