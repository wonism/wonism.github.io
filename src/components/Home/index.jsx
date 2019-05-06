import React from 'react';
import { arrayOf, shape } from 'prop-types';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { flow, isEmpty, isArray, slice, map, get, first, includes, size } from 'lodash/fp';
import Helmet from 'react-helmet';
import Wrapper from '~/components/Common/Wrapper';
import SimpleWrapper from '~/components/Common/SimpleWrapper';
import PortfolioCard from '~/components/Common/PortfolioCard';

const styles = require('!raw-loader!sass-loader!./index.scss');

const StylesWrapper = styled.div`
  ${styles}
`;

const Title = styled.h1`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  margin: auto;
  width: 80%;
  height: 1.5em;
  line-height: 1.5em;
  font-size: 48px;
  font-size: 10vw;
  font-family: 'Kaushan Script';
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  color: ${({ theme: { color } }) => color};
`;

const Home = ({
  portfolios,
}) => (
  <StylesWrapper>
    <Wrapper isHome>
      <Title>
        I'm Wonism!
      </Title>
      <Helmet>
        <title>I'm Wonism!</title>
        <meta name="og:title" content="I'm Wonism!" />
      </Helmet>
    </Wrapper>
    {size(portfolios) >= 4 ? (
      <SimpleWrapper key="portfolios">
        {flow(
          slice(0, 4),
          map((edge) => {
            const portfolio = get('node.frontmatter')(edge);
            const { path, title, images } = portfolio;
            const image = isArray(images) ? first(images) : null;

            if (!isEmpty(image)) {
              return (
                <PortfolioCard key={path}>
                  <Link to={path}>
                    {includes('//')(image) ? (
                      <img src={image} alt="portfolio" />
                    ) : (
                      <img src={require(`~/resources/${image}`)} alt="portfolio" />
                    )}
                    <h6>{title}</h6>
                  </Link>
                </PortfolioCard>
              );
            }

            return (
              <PortfolioCard key={path}>
                <Link to={path}>
                  <h4>{title}</h4>
                </Link>
              </PortfolioCard>
            );
          })
        )(portfolios)}
      </SimpleWrapper>
    ) : null}
  </StylesWrapper>
);

Home.propTypes = {
  portfolios: arrayOf(shape({})),
};

Home.defaultProps = {
  portfolios: [],
};

export default Home;
