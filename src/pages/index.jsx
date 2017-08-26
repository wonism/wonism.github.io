import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import fp from 'lodash/fp';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import Bio from '../components/Bio';

import './posts.scss';

const BlogIndex = ({ data }) => {
  const siteTitle = fp.get('site.siteMetadata.title')(data);
  const posts = fp.get('allMarkdownRemark.edges')(data);

  return (
    <div className="main-container">
      <Helmet title={siteTitle} />
      <Bio />
      <div className="posts">
        {posts.map((post) => {
          if (post.node.path !== '/404/') {
            return (
              <div
                key={post.node.frontmatter.path}
                className="post-card"
              >
                <Link
                  to={post.node.frontmatter.path}
                >
                  <h3>
                    {post.node.frontmatter.title}
                  </h3>
                  <small>
                    {post.node.frontmatter.date}
                  </small>
                  {/* eslint-disable react/no-danger */}
                  <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
                  {/* eslint-enable react/no-danger */}
                </Link>
              </div>
            );
          }

          return null;
        })}
      </div>
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%', }}
      />
    </div>
  );
};

BlogIndex.propTypes = {
  data: PropTypes.shape({}).isRequired,
  // route: React.PropTypes.object,
};

export default BlogIndex;

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            path
            date(formatString: "DD MMMM, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */
