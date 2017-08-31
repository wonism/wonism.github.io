const path = require('path');
const fp = require('lodash/fp');
const { PAGING_COUNT } = require('./src/constants');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost.jsx');
    const pagedBlogPost = path.resolve('./src/templates/PagedPosts.jsx');
    const taggedBlogPost = path.resolve('./src/templates/TaggedPosts.jsx');
    const resume = path.resolve('./src/templates/Resume.jsx');
    const portfolio = path.resolve('./src/templates/Portfolio.jsx');

    resolve(
      graphql(`
        {
          allMarkdownRemark(limit: 1000) {
            edges {
              node {
                frontmatter {
                  path
                  tags
                  isNotPost
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

          const isNotPost = fp.get('node.frontmatter.isNotPost')(edge);
          const notPost = fp.isEqual(fp.get('node.frontmatter.path')(edge))('/resume/') ? resume : portfolio;

          createPage({
            path: edge.node.frontmatter.path,
            component: isNotPost ? notPost : blogPost,
            context: {
              path: edge.node.frontmatter.path,
            },
          });
        })(edges);

        const objectsNotPost = fp.find(fp.set('node.frontmatter.isNotPost', true)({}))(edges);
        const notPostCount = fp.isNil(objectsNotPost) ? 0 : fp.get('length')(objectsNotPost);
        const postsLength = fp.get('length')(edges) - notPostCount;
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
