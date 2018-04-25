import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import FaRss from 'react-icons/lib/fa/rss-square';
import fp from 'lodash/fp';
import Parser from 'rss-parser';
import { PRIMARY_COLOR } from '~/components/Common/constants';

const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const PATH = 'https://news.js.org/feed';

const NewsWrapper = styled.div`
  margin: auto;
  padding: 120px 0 0;
  max-width: 1176px;
  text-align: center;

  @media (max-width: 414px) {
    padding: 70px 16px 0;
  }

  article {
    margin: 0 0 16px;
    font-size: 16px;
    text-align: left;

    h2 {
      font-size: 20px;
    }

    p {
      margin: 4px 0 0;
    }
  }

  section a {
    display: block;
    padding: 16px 0 0;
    border-top: 1px solid #eee;

    &:first-child {
      padding: 0;
      border-top: 0;
    }
  }

  a {
    color: #000;

    &:visited {
      color: #000;
    }

    &:hover {
      color: ${PRIMARY_COLOR};
    }
  }

  & > div {
    margin: 32px 0 16px;
  }
`;

export default class News extends PureComponent {
  state = {
    title: null,
    link: null,
    items: [],
  };

  componentDidMount() {
    const parser = new Parser();

    parser.parseURL(`${CORS_PROXY}${PATH}`, (err, res) => {
      if (!err) {
        const { title, link, items } = res;

        this.setState({
          title,
          link,
          items,
        });
      }
    });
  }

  render() {
    return (
      <NewsWrapper>
        <Helmet>
          <title>WONISM | Open Sources</title>
          <meta name="og:title" content="WONISM | Open Sources" />
        </Helmet>
        {fp.isNil(this.state.title) ? null : [
          <section key="list">
            {fp.map(({ link, title, contentSnippet })=> (
              <a key={link} href={link} rel="noopener noreferrer" target="_blank">
                <article>
                  <h2>{title}</h2>
                  <p>{contentSnippet}</p>
                </article>
              </a>
            ))(this.state.items)}
          </section>,
          <div key="provider">
            <a href={this.state.link} rel="noopener noreferrer" target="_blank">
              <FaRss />
              <span>{this.state.title}</span>
            </a>
          </div>,
        ]}
      </NewsWrapper>
    );
  }
};
