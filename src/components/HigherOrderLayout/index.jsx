/** @jsx createElement */
import { createElement, Children, cloneElement, Component } from 'react';
import { func, arrayOf, shape, string, node } from 'prop-types';
import styled from 'styled-components';
import { size, first } from 'lodash/fp';
import Gnb from '~/containers/Gnb';
import Footer from '~/components/Footer';

const Background = styled.div`
  background-color: #fff;
`;

export default class HigherOrderLayout extends Component {
  static propTypes = {
    historyGoBack: func.isRequired,
    printPage: func.isRequired,
    categories: arrayOf(shape({})),
    postInformations: arrayOf(shape({
      path: string.isRequired,
      title: string.isRequired,
      tags: arrayOf(string).isRequired,
      category: string,
    })),
    portfolios: arrayOf(shape({})).isRequired,
    children: node,
    location: shape({
      pathname: string,
    }).isRequired,
  };

  static defaultProps = {
    categories: [],
    postInformations: [],
    children: null,
  };

  render() {
    const {
      historyGoBack,
      printPage,
      categories,
      postInformations,
      portfolios,
      children,
      location,
    } = this.props;

    const childrenWithProps = Children.map(
      children,
      child => cloneElement(
        child,
        {
          location,
          historyGoBack,
          printPage,
          portfolios,
        }
      )
    );

    return (
      <Background>
        <nav>
          <Gnb
            location={location}
            categories={categories}
            postInformations={postInformations}
            hasPortfolio={size(portfolios) > 0}
          />
        </nav>
        <main>
          {first(childrenWithProps)}
        </main>
        <footer>
          <Footer />
        </footer>
      </Background>
    );
  }
}
