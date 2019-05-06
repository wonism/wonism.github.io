import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import FaRss from 'react-icons/lib/fa/rss-square';
import FaGithub from 'react-icons/lib/fa/github';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaLinkedin from 'react-icons/lib/fa/linkedin';
import GoMail from 'react-icons/lib/go/mail';

const FooterWrapper = styled.section`
  padding: 10px;
  color: #000;
  background-color: #eee;
  font-size: 11px;
  font-weight: 500;
  text-align: right;

  div {
    float: left;
  }

  a {
    color: #000;
    font-weight: 700;
  }
`;

const Footer = () => (
  <FooterWrapper>
    <div>
      Theme by @
      <a
        href="https://github.com/wonism/gatsby-advanced-blog"
        target="_blank"
        rel="noreferrer noopener"
      >
        wonism
      </a>
    </div>
    &nbsp;&nbsp;
    <Link to="/contacts">
      <GoMail />
    </Link>
    &nbsp;&nbsp;
    <a
      href="https://github.com/wonism"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaGithub />
    </a>
    &nbsp;&nbsp;
    <a
      href="https://twitter.com/j1ism"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaTwitter />
    </a>
    &nbsp;&nbsp;
    <a
      href="https://www.facebook.com/j1.chic"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaFacebook />
    </a>
    &nbsp;&nbsp;
    <a
      href="https://www.linkedin.com/in/wonism/"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaLinkedin />
    </a>
    &nbsp;&nbsp;
    <a
      href="/rss.xml"
      target="_blank"
      rel="noreferrer noopener"
    >
      <FaRss />
    </a>
  </FooterWrapper>
);

export default Footer;
