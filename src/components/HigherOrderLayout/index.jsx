import React, { Children, cloneElement, Component } from 'react';
import { func, arrayOf, shape, string, node } from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import { size, first } from 'lodash/fp';
import Gnb from '~/containers/Gnb';
import Footer from '~/components/Footer';

const Background = styled.div`
  background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
`;

const BLACK_COLOR = '#1f1f24';
const WHITE_COLOR = '#fefefe';

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

  constructor(props) {
    super(props);

    const isDracula = global.localStorage && global.localStorage.getItem('theme') === 'dracula';
    this.state = { isDracula };
  }

  toggleTheme = () => {
    const { isDracula } = this.state;

    if (isDracula) {
      if (global.localStorage) {
        global.localStorage.setItem('theme', 'normal');
      }
    } else {
      if (global.localStorage) {
        global.localStorage.setItem('theme', 'dracula');
      }
    }

    this.setState({
      isDracula: !isDracula,
    });
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
    const { isDracula } = this.state;

    const theme = isDracula ? {
      color: WHITE_COLOR,
      backgroundColor: BLACK_COLOR,
    } : {
      color: BLACK_COLOR,
      backgroundColor: WHITE_COLOR,
    };

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
      <ThemeProvider theme={theme}>
        <Background>
          <nav>
            <Gnb
              location={location}
              categories={categories}
              postInformations={postInformations}
              hasPortfolio={size(portfolios) > 0}
              isDracula={isDracula}
              toggleTheme={this.toggleTheme}
            />
          </nav>
          <main>
            {first(childrenWithProps)}
          </main>
          <footer>
            <Footer />
          </footer>
        </Background>
      </ThemeProvider>
    );
  }
}
