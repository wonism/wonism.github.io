/** @jsx createElement */
import { createElement } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Repository } from 'react-github-info';
import MailForm from 'react-mail-form';
import * as appActions from '~/store/app/actions';
import Layout from '~/components/Layout';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import { PRIMARY_COLOR } from '~/components/Common/constants';
import './index.scss';

const Form = styled(MailForm)`
  margin: auto;
  max-width: 720px;
  font-size: 14px;
  text-align: center;

  input,
  textarea {
    display: block;
    margin: 12px auto;
    width: 100%;
    max-width: 480px;
    border: 1px solid #555;
    outline: 0;
    font-size: 16px;
  }

  input {
    padding: 12px 6px;
  }

  textarea {
    padding: 6px;
  }

  a {
    display: block;
    margin: auto;
    width: 120px;
    height: 3em;
    line-height: 3em;
    color: #fff;
    background-color: ${PRIMARY_COLOR};
    font-size: 16px;
    font-weight: 900;
    font-style: italic;

    &:visited,
    &:hover,
    &:focus,
    &:active {
      color: #fff;
    }

    &:hover {
      opacity: .7;
    }
  }
`;

const ReactMailForm = ({ historyGoBack }) => (
  <OpenSourceWrapper>
    <Helmet>
      <title>WONISM | REACT MAIL FORM</title>
      <meta name="og:title" content="WONISM | REACT MAIL FORM" />
    </Helmet>
    <Repository username="wonism" repos="react-mail-form" />
    <br />
    <br />
    <Form to="yocee57@gmail.com" />
    <br /><br />
    <button onClick={historyGoBack}>← Go back</button>
    <br /><br />
  </OpenSourceWrapper>
);

ReactMailForm.propTypes = {
  historyGoBack: func.isRequired,
};

const ConnectedReactMailForm = connect(
  () => ({}),
  {
    historyGoBack: appActions.historyGoBack,
  }
)(ReactMailForm);

const ReactMailFormLayout = props => (
  <Layout {...props}>
    <ConnectedReactMailForm />
  </Layout>
);

export default ReactMailFormLayout;
