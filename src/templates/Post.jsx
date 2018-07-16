/** @jsx createElement */
import { createElement } from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '~/components/Layout';
import Post from '~/containers/Post';

const styles = require('!raw-loader!sass-loader!./post.scss');

const StylesWrapper = styled.div`
  ${styles}
`;

const PostTemplate = props => (
  <Layout {...props}>
    <StylesWrapper>
      <Post {...props} />
    </StylesWrapper>
  </Layout>
);

export default PostTemplate;

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark (
      frontmatter: { path: { eq: $path } }
    ) {
      id
      html
      frontmatter {
        title
        path
        images
        category
        tags
        date
        components {
          rootId
          fileName
        }
        tweets {
          rootId
          userId
          tweetId
        } summary
      }
    }
  }
`;
