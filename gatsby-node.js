const path = require('path');
const fp = require('lodash/fp');
const { PAGING_COUNT } = require('./src/constants');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/BlogPost.jsx');
    const pagedBlogPost = path.resolve('./src/templates/PagedPosts.jsx');
    const taggedBlogPost = path.resolve('./src/templates/TaggedPosts.jsx');
    const categorizedBlogPost = path.resolve('./src/templates/CategorizedPosts.jsx');
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
                  category
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
        const categoryMatrix = [];

        // Create blog posts pages.
        fp.each((edge) => {
          tagMatrix.push(fp.get('node.frontmatter.tags')(edge));
          if (fp.get('node.frontmatter.category')(edge)) {
            categoryMatrix.push(fp.get('node.frontmatter.category')(edge));
          }

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

        const objectsNotPost = fp.filter(
          fp.get('node.frontmatter.isNotPost')
        )(edges);
        const notPostCount = fp.isNil(objectsNotPost) ? 0 : fp.get('length')(objectsNotPost);
        const postsLength = fp.get('length')(edges) - notPostCount;
        const pagesCount = postsLength ? (Math.ceil(postsLength / PAGING_COUNT) + 1) : 0;
        const pages = fp.range(1, pagesCount);

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

          const taggedPostsInformation = { length: 0 };

          fp.each((edge) => {
            const postTags = fp.get('node.frontmatter.tags')(edge);
            taggedPostsInformation.length += fp.includes(tag)(postTags) ? 1 : 0;
          })(edges);

          const taggedPagesCount = taggedPostsInformation.length ?
            (Math.ceil(taggedPostsInformation.length / PAGING_COUNT) + 1) :
            0;
          const taggedPages = fp.range(1, taggedPagesCount);

          fp.each((taggedPage) => {
            createPage({
              path: `/tags/${tag}/${taggedPage}`,
              component: taggedBlogPost,
              context: {
                path: `/tags/${tag}/${taggedPage}`,
              },
            });
          })(taggedPages);
        })(tags);

        const categories = fp.uniq(fp.flatten(categoryMatrix));

        fp.each((category) => {
          createPage({
            path: `/categories/${category}`,
            component: categorizedBlogPost,
            context: {
              path: `/categories/${category}`,
            },
          });

          const categorizedPostsInformation = { length: 0 };

          fp.each((edge) => {
            const postCategories = fp.get('node.frontmatter.category')(edge);
            categorizedPostsInformation.length += fp.includes(category)(postCategories) ? 1 : 0;
          })(edges);

          const categorizedPagesCount = categorizedPostsInformation.length ?
            (Math.ceil(categorizedPostsInformation.length / PAGING_COUNT) + 1) :
            0;
          const categorizedPages = fp.range(1, categorizedPagesCount);

          fp.each((categorizedPage) => {
            createPage({
              path: `/categories/${category}/${categorizedPage}`,
              component: categorizedBlogPost,
              context: {
                path: `/categories/${category}/${categorizedPage}`,
              },
            });
          })(categorizedPages);
        })(categories);
      })
    );
  });
};
