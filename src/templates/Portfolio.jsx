import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import './portfolio.scss';

const Portfolio = ({
  data,
}) => {
  const portfolio = fp.get('markdownRemark')(data);
  const siteTitle = fp.get('site.siteMetadata.title')(data);
  const title = `${fp.get('frontmatter.title')(portfolio)} | ${siteTitle}`;
  const images = fp.get('frontmatter.images')(portfolio);

  return (
    <section className="portfolio">
      <Helmet>
        <title>{title}</title>
        <meta name="keyword" content="JavaScript, Front-end, Developer, Front-end developer" />
        <meta name="og:title" content={title} />
      </Helmet>
      {/* eslint-disable react/no-danger */}
      <section
        className="portfolio-contents"
        dangerouslySetInnerHTML={{ __html: fp.get('html')(portfolio) }}
      />
      {/* eslint-enable react/no-danger */}
      <section className="portfolio-images">
        {fp.map(image => (
          <img
            key={image}
            src={image}
            alt={fp.get('title')(portfolio)}
          />
        ))(images)}
      </section>
    </section>
  );
};

Portfolio.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
};

export default Portfolio;

/* eslint-disable no-undef */
export const portfolio = graphql`
  query PortfolioQuery ($path: String!) {
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
        images
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
/* eslint-enable no-undef */
