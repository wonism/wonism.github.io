import 'babel-polyfill';
import React, { PureComponent } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import PropTypes from 'prop-types';
import fp from 'lodash/fp';
import HeaderInitialState from './Header/HeaderInitialState';
import HeaderReducers from './Header/HeaderReducers';
import HeaderContainer from './Header/HeaderContainer';
import createReducer from '../utils/createReducer';
import scrollTop from '../utils/scroll';
import './index.scss';
import './main.scss';

export default class Template extends PureComponent {
  static propTypes = {
    children: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
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
    const urlInformations = fp.flow(
      fp.filter(edge => !fp.get('node.frontmatter.isNotPost')(edge)),
      fp.map(edge => ({
        path: fp.get('node.frontmatter.path')(edge),
        title: fp.get('node.frontmatter.title')(edge),
        tags: fp.get('node.frontmatter.tags')(edge),
        category: fp.get('node.frontmatter.category')(edge),
      }))
    )(edges);
    const reducers = combineReducers({
      header: createReducer(HeaderReducers, fp.flow(
        fp.set('categories', purifiedCategories),
        fp.set('urlInformations', urlInformations),
      )(HeaderInitialState)),
    });
    const middleware = applyMiddleware(thunk);
    const store = createStore(reducers, middleware);

    return (
      <div>
        <Provider store={store}>
          <HeaderContainer />
        </Provider>
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
