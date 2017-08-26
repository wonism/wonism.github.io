import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
// import Link from 'gatsby-link';
import GoogleAds from 'react-google-ads';
import fp from 'lodash/fp';

import Bio from '../components/Bio';

const BlogPostTemplate = ({
  data,
}) => {
  const post = fp.get('markdownRemark')(data);
  const siteTitle = fp.get('site.siteMetadata.title')(data);

  return (
    <div className="post">
      <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
      <h1>
        {fp.get('frontmatter.title')(post)}
      </h1>
      <p>
        {fp.get('frontmatter.date')(post)}
      </p>
      {/* eslint-disable react/no-danger */}
      <div dangerouslySetInnerHTML={{ __html: fp.get('html')(post) }} />
      {/* eslint-enable react/no-danger */}
      <hr />
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%', }}
      />
      <hr />
      <Bio />
    </div>
  );
};

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default BlogPostTemplate;

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
/* eslint-enable no-undef */
