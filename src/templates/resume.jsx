import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import * as profileUrl from '../resources/me.jpg';
import './resume.scss';

class Resume extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({ date: PropTypes.object }).isRequired,
  };

  componentDidMount() {
    const anchors = this.$mdWrapper.getElementsByTagName('a');

    fp.forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (fp.startsWith('http')(href)) {
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noreferrer noopener');
      }
    })(anchors);
  }

  render() {
    const { data } = this.props;
    const resume = fp.get('markdownRemark')(data);
    const siteTitle = fp.get('site.siteMetadata.title')(data);
    const title = `${fp.get('frontmatter.title')(resume)} | ${siteTitle}`;

    return (
      <section className="resume">
        <Helmet>
          <title>{title}</title>
          <meta name="keyword" content="JavaScript, Front-end, Developer, Front-end developer" />
          <meta name="og:title" content={title} />
        </Helmet>
        <div className="clearfix">
          <button
            className="btn btn-print pull-right"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.print();
              }
            }}
          >
            <i className="fa fa-print" />&nbsp;Print
          </button>
        </div>
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
            href="https://www.linkedin.com/in/wonism/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <i className="fa fa-linkedin" />
          </a>
        </section>
        {/* eslint-disable react/no-danger */}
        <section
          ref={(mdWrapper) => { this.$mdWrapper = mdWrapper; }}
          className="resume-contents"
          dangerouslySetInnerHTML={{ __html: fp.get('html')(resume) }}
        />
        {/* eslint-enable react/no-danger */}
      </section>
    );
  }
}

export default Resume;

/* eslint-disable no-undef */
export const resume = graphql`
  query ResumeQuery ($path: String!) {
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
        path
        tags
        date(formatString: "MMMM DD, YYYY")
        isNotPost
      }
    }
  }
`;
/* eslint-enable no-undef */
