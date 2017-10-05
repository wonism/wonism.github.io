import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import fp from 'lodash/fp';
import Header from './Header';
import scrollTop from '../utils/scroll';

import './index.scss';
import './main.scss';

export default class Template extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    // location: React.PropTypes.shape({}).isRequired,
    // route: React.PropTypes.shape({}).isRequired,
  };

  render() {
    const { data, children } = this.props;
    const edges = fp.get('allMarkdownRemark.edges')(data);
    const categories = fp.flow(
      fp.map(fp.get('node.frontmatter.category')),
      fp.filter(category => category)
    )(edges);
    const purifiedCategories = fp.flow(
      fp.reduce((prev, curr) => ({
        ...prev,
        [curr]: prev[curr] ? prev[curr] + 1 : 1,
      }), {
        All: categories.length,
      }),
      obj => fp.flow(
        fp.keys,
        fp.map(key => ({
          key,
          length: obj[key],
        }))
      )(obj)
    )(categories);

    return (
      <div>
        <Header categories={purifiedCategories} />
        <main className="container">
          {children()}
        </main>
        <nav className="to-top">
          <button onClick={() => { scrollTop(400); }}>↑</button>
        </nav>
      </div>
    );
  }
}

/* eslint-disable no-undef */
export const layoutQuery = graphql`
  query LayoutQuery {
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
