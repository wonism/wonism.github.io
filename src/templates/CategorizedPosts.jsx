import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import fp from 'lodash/fp';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import Truncate from 'react-truncate';
import Bio from '../components/Bio';
import {
  PAGING_COUNT,
  MAX_PAGES,
} from '../constants';

import '../pages/posts.scss';

const CategoryIndex = ({
  data,
  location,
}) => {
  const siteTitle = fp.get('site.siteMetadata.title')(data);
  const posts = fp.flow(
    fp.get('allMarkdownRemark.edges'),
    fp.filter(fp.flow(
      fp.get('node.frontmatter.isNotPost'),
      bool => !bool
    ))
  )(data);

  const category = fp.flow(
    fp.get('pathname'),
    fp.split('/'),
    fp.get('2')
  )(location);
  const categoryPosts = fp.filter((post) => {
    const categories = fp.get('node.frontmatter.category')(post);

    return fp.includes(category)(categories);
  })(posts);

  const postsLength = fp.get('length')(categoryPosts);
  const pagesCount = postsLength ? Math.ceil(postsLength / PAGING_COUNT) : 0;
  const pages = fp.range(1, pagesCount + 1);
  const page = fp.flow(
    fp.get('pathname'),
    fp.split('/'),
    fp.get('3'),
    (parsedPage = 1) => fp.toNumber(parsedPage)
  )(location);
  const isManyPages = pagesCount >= MAX_PAGES;
  const filteredPages = isManyPages ? fp.filter((el) => {
    const range = page - el;

    return Math.abs(range) <= Math.floor(MAX_PAGES / 2);
  })(pages) : pages;
  const isNearStart = fp.includes(1)(filteredPages);
  const isNearEnd = fp.includes(pagesCount)(filteredPages);

  const filteredPosts = fp.slice(
    (page - 1) * PAGING_COUNT,
    (page * PAGING_COUNT)
  )(categoryPosts);

  return (
    <div className="main-container">
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="keyword" content={`JavaScript, Front-end, Developer, ${category}`} />
        <meta name="og:title" content={siteTitle} />
      </Helmet>
      <Bio />
      <div className="posts">
        {fp.isEmpty(filteredPosts) ? (
          <div className="no-results text-center">검색된 게시물이 없습니다.</div>
        ) : null}
        {fp.map((post) => {
          if (post.node.path !== '/404/') {
            const hasTags = !fp.isEmpty(fp.get('node.frontmatter.tags')(post));

            return (
              <section
                key={fp.get('node.frontmatter.path')(post)}
                className="post-card"
              >
                <div className="card-content clearfix">
                  <Link
                    to={fp.get('node.frontmatter.path')(post)}
                  >
                    <h3>
                      {fp.get('node.frontmatter.title')(post)}
                    </h3>
                    <small>
                      {fp.get('node.frontmatter.date')(post)}
                    </small>
                    <p>
                      <Truncate lines={3} ellipsis={<span>...</span>}>
                        {fp.get('node.frontmatter.summary')(post)}
                      </Truncate>
                    </p>
                  </Link>
                  {hasTags ? (
                    <div className="clearfix">
                      <i className="fa fa-tags tag-icon" />
                      <div className="tags">
                        {fp.map(t => (
                          <Link
                            key={t}
                            to={`/tags/${t}`}
                          >
                            <small>{t}</small>
                          </Link>
                        ))(fp.get('node.frontmatter.tags')(post))}
                      </div>
                    </div>
                  ) : null}
                </div>
              </section>
            );
          }

          return null;
        })(filteredPosts)}
      </div>
      {!fp.isEmpty(pages) ? (
        <nav className="pagination">
          <ul className="list-layout">
            {isManyPages && !isNearStart ? ([
              <li key="first">
                <Link to={`/categories/${category}/1`}>
                  <i className="fa fa-angle-double-left" />
                </Link>
              </li>,
              <li key="ellipsis">
                <i className="fa fa-ellipsis-h" />
              </li>,
            ]) : null}
            {!fp.isEqual(1)(page) ? (
              <li>
                <Link to={`/categories/${category}/${page - 1}`}>
                  <i className="fa fa-angle-left" />
                </Link>
              </li>
            ) : null}
            {fp.map((i) => {
              if (fp.isEqual(i)(page)) {
                return (
                  <li
                    key={i}
                    className={fp.isEqual(i)(page) ? 'active' : ''}
                  >
                    {i}
                  </li>
                );
              }

              return (
                <li
                  key={i}
                  className={fp.isEqual(i)(page) ? 'active' : ''}
                >
                  <Link to={`/categories/${category}/${i}`}>
                    {i}
                  </Link>
                </li>
              );
            })(filteredPages)}
            {!fp.isEqual(pagesCount)(page) ? (
              <li>
                <Link to={`/categories/${category}/${page + 1}`}>
                  <i className="fa fa-angle-right" />
                </Link>
              </li>
            ) : null}
            {isManyPages && !isNearEnd ? ([
              <li key="ellipsis">
                <i className="fa fa-ellipsis-h" />
              </li>,
              <li key="last">
                <Link to={`/categories/${category}/${pagesCount}`}>
                  <i className="fa fa-angle-double-right" />
                </Link>
              </li>,
            ]) : null}
          </ul>
        </nav>
      ) : null}
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%' }}
      />
    </div>
  );
};

CategoryIndex.propTypes = {
  data: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default CategoryIndex;

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query CatagoryQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            tags
            category
            date(formatString: "DD MMMM, YYYY")
            summary
            isNotPost
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */
