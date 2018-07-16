/** @jsx createElement */
import { createElement } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Profile, Repository } from 'react-github-info';
import * as appActions from '~/store/app/actions';
import Layout from '~/components/Layout';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.scss';

const Github = ({ historyGoBack }) => (
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
  historyGoBack: func.isRequired,
};

const ConnectedGithub = connect(
  () => ({}),
  {
    historyGoBack: appActions.historyGoBack,
  }
)(Github);

const GithubLayout = props => (
  <Layout {...props}>
    <ConnectedGithub />
  </Layout>
);

export default GithubLayout;
