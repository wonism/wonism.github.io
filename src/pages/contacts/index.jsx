/** @jsx createElement */
import { createElement } from 'react';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import ReactMailForm from 'react-mail-form';
import Layout from '~/components/Layout';
import { PRIMARY_COLOR } from '~/components/Common/constants';

const Wrapper = styled.section`
  margin: auto;
  padding: 120px 0 0;
  max-width: 720px;
  min-height: 100vh;
  font-size: 14px;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 70px 16px 0;
  }

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

const Contacts = props => (
  <Layout {...props}>
    <Wrapper>
      <Helmet>
        <title>WONISM | CONTACTS</title>
        <meta name="og:title" content="WONISM | CONTACTS" />
      </Helmet>
      <ReactMailForm to="yocee57@gmail.com" />
    </Wrapper>
  </Layout>
);

export default Contacts;
