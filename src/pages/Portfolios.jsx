import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import fp from 'lodash/fp';
import Helmet from 'react-helmet';
import GoogleAds from 'react-google-ads';
import Bio from '../components/Bio';

import './portfolios.scss';

const Portfolio = ({
  data,
}) => {
  const siteTitle = fp.get('site.siteMetadata.title')(data);
  const portfolios = fp.flow(
    fp.get('allMarkdownRemark.edges'),
    fp.flow(
      fp.filter(fp.flow(
        fp.get('node.frontmatter.isNotPost'),
      )),
      fp.filter(fp.flow(
        fp.get('node.frontmatter.path'),
        path => !fp.isEqual('/resume/')(path)
      ))
    )
  )(data);

  return (
    <div className="portfolio-container">
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="keyword" content="JavaScript, Front-end, Developer" />
        <meta name="og:title" content={siteTitle} />
      </Helmet>
      <Bio />
      <div className="portfolios">
        {fp.map((portfolio) => {
          if (portfolio.node.path !== '/404/') {
            const images = fp.get('node.frontmatter.images')(portfolio);
            const image = fp.get('0')(images);
            const title = fp.get('node.frontmatter.title')(portfolio);

            return (
              <section
                key={fp.get('node.frontmatter.path')(portfolio)}
                className="portfolio-card"
              >
                <Link
                  to={fp.get('node.frontmatter.path')(portfolio)}
                >
                  <div className="image-wrapper">
                    <img
                      src={image}
                      alt={title}
                      width="320"
                      height="320"
                    />
                  </div>
                  <div className="description-wrapper">
                    <h1>{title}</h1>
                    <p>{fp.get('node.frontmatter.period')(portfolio)}</p>
                  </div>
                </Link>
              </section>
            );
          }

          return null;
        })(portfolios)}
      </div>
      <GoogleAds
        client="ca-pub-1777052704513089"
        slot="4491507809"
        style={{ display: 'inline-block', width: '100%' }}
      />
    </div>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default Portfolio;

/* eslint-disable no-undef */
export const portfolioQuery = graphql`
  query PortfoliosQuery {
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
            date(formatString: "DD MMMM, YYYY")
            period
            images
            isNotPost
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */
