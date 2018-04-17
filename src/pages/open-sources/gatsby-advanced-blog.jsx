import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import { historyGoBack } from '~/store/app/actions';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

const GatsbyAdvancedBlog = ({
  historyGoBack,
}) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | Gatsby Advanced Blog</title>
      <meta name="og:title" content="WONISM | Gatsby Advanced Blog" />
    </Helmet>
    <Repository username="wonism" repos="gatsby-advanced-blog" />
    <br /><br />
    <button onClick={historyGoBack}>← Go back</button>
    <br /><br />
  </OpenSourceWrapper>
);

GatsbyAdvancedBlog.propTypes = {
  historyGoBack: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    historyGoBack,
  }
)(GatsbyAdvancedBlog);

/* eslint-disable no-undef */
export const GatsbyAdvancedBlogQuery = graphql`
  query gatsbyAdvancedBlogQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
/* eslint-enable no-undef */
