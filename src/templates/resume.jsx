import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import fp from 'lodash/fp';
import * as profileUrl from '../resources/me.jpg';
import './resume.scss';

const Resume = ({
  data,
}) => {
  const resume = fp.get('markdownRemark')(data);
  const siteTitle = fp.get('site.siteMetadata.title')(data);
  const title = `${fp.get('frontmatter.title')(resume)} | ${siteTitle}`;

  return (
    <section className="resume">
      <Helmet>
        <title>{title}</title>
        <meta name="keyword" content="front-end developer" />
        <meta name="author" content="wonism" />
        <meta name="og:title" content={title} />
      </Helmet>
      <section className="basic-infos text-center">
        <img
          className="profile-picture"
          src={profileUrl.default}
          alt="wonism"
          width="120"
          height="120"
        />
        <h1>Jaewon Kim</h1>
        <p>yocee57@gmail.com</p>
      </section>
      <section className="social-networks text-center">
        <a
          href="https://github.com/wonism"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-github" /></a>
        <a
          href="https://twitter.com/j1ism"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-twitter" />
        </a>
        <a
          href="https://www.facebook.com/j1.chic"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-facebook" />
        </a>
        <a
          href="https://www.linkedin.com/in/jaewon-kim-812815108/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <i className="fa fa-linkedin" />
        </a>
      </section>
      {/* eslint-disable react/no-danger */}
      <section dangerouslySetInnerHTML={{ __html: fp.get('html')(resume) }} />
      {/* eslint-enable react/no-danger */}
    </section>
  );
};

Resume.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Resume;

/* eslint-disable no-undef */
export const resume = graphql`
  query Resume ($path: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
/* eslint-enable no-undef */
