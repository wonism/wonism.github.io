const path = require('path');
const fp = require('lodash/fp');
const _ = require('lodash');
const { PAGING_COUNT } = require('./src/constants');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.jsx');
    const pagedBlogPost = path.resolve('./src/templates/paged-posts.jsx');
    const taggedBlogPost = path.resolve('./src/templates/tagged-posts.jsx');

    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                frontmatter {
                  path
                  tags
                }
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }

        const edges = result.data.allMarkdownRemark.edges;
        const tagMatrix = [];

        // Create blog posts pages.
        fp.each((edge) => {
          tagMatrix.push(fp.get('node.frontmatter.tags')(edge));

          createPage({
            path: edge.node.frontmatter.path,
            component: blogPost,
            context: {
              path: edge.node.frontmatter.path,
            },
          });
        })(edges);

        const postsLength = fp.get('length')(edges);
        const pagesCount = postsLength ? Math.ceil(postsLength / PAGING_COUNT) : 0;
        const pages = fp.range(1, pagesCount + 1);

        fp.each((page) => {
          createPage({
            path: `/pages/${page}`,
            component: pagedBlogPost,
            context: {
              path: `/pages/${page}`,
            },
          });
        })(pages);

        const tags = fp.uniq(fp.flatten(tagMatrix));

        fp.each((tag) => {
          createPage({
            path: `/tags/${tag}`,
            component: taggedBlogPost,
            context: {
              path: `/tags/${tag}`,
            },
          });
        })(tags);
      })
    );
  });
};
