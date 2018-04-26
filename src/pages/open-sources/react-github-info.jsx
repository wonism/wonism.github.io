import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Profile, Repository } from 'react-github-info';
import { historyGoBack } from '~/store/app/actions';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.less';

const Github = ({
  historyGoBack,
}) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | REACT GITHUB INFO</title>
      <meta name="og:title" content="WONISM | REACT GITHUB INFO" />
    </Helmet>
    <Repository username="wonism" repos="react-github-info" />
    <br /><br />
    <Profile username="wonism" />
    <br /><br />
    <Repository username="wonism" repos="react-github-info" />
    <br /><br />
    <button onClick={historyGoBack}>← Go back</button>
    <br /><br />
  </OpenSourceWrapper>
);

Github.propTypes = {
  historyGoBack: PropTypes.func.isRequired,
};

export default connect(
  () => ({}),
  {
    historyGoBack,
  }
)(Github);

/* eslint-disable no-undef */
export const githubQuery = graphql`
  query GithubQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
/* eslint-enable no-undef */
