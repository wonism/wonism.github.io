import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '~/components/Layout';
import Post from '~/containers/Post';

const StylesWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Inconsolata');

  /**
   * based on zenburn.css
   *
   * Zenburn style from voldmar.ru (c) Vladimir Epifanov <voldmar@voldmar.ru>
   * based on dark.css by Ivan Sagalaev
   *
   * change .markdown into .gatsby-highlight
   * remove .hljs- prefix
   */

  .gatsby-highlight pre {
    display: block;
    position: relative;
    padding: 20px 0 0;
    background: #263238;
    color: #dcdcdc;
    border-radius: 5px;
    overflow-y: hidden;
  }

  .gatsby-highlight pre:before {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 20px;
    width: 10px;
    height: 10px;
    background-color: #ff5f56;
    border-radius: 50%;
    content: '';
  }

  .gatsby-highlight pre:after {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 40px;
    width: 10px;
    height: 10px;
    background-color: #ffbd2e;
    border-radius: 50%;
    content: '';
  }

  .gatsby-highlight pre code:before {
    display: inline-block;
    position: absolute;
    top: 15px;
    left: 60px;
    width: 10px;
    height: 10px;
    background-color: #27c93f;
    border-radius: 50%;
    content: '';
  }

  .gatsby-highlight pre code {
    background: none;
    border: none;
    border-radius: 3px;
    display: inline-block;
    overflow: inherit;
    padding: 1.58333rem;
    white-space: inherit;
    word-wrap: normal;
    font-family: Inconsolata, monospace;
  }

  code {
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    white-space: pre;
    white-space: pre-wrap;
    white-space: pre-line;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -hp-pre-wrap;
    word-wrap: break-word;
    background: transparent;
    color: #3B9CFF;
    display: inline;
    font-family: D2Coding, 'D2 coding', monospace, serif;
    max-width: 100%;
    overflow: auto;
    padding: 0 0.1625rem;
  }

  .gatsby-highlight {
    position: relative;
  }

  .gatsby-highlight pre code {
    color: #dcdcdc;
  }

  .gatsby-highlight .copy-button {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 4px 8px;
    line-height: 12px;
    color: #263238;
    background-color: #dcdcdc;
    background-image: linear-gradient(#ededed, #dcdcdc);
    outline: 0;
    border: 1px solid #cbcbcb;
    border-radius: 5px;
    font-size: 10px;
    font-weight: 700;
    cursor: pointer;
    z-index: 3;
  }

  .gatsby-highlight .copy-button:hover {
    background-color: #dcdcdc;
    background-image: linear-gradient(#dcdcdc, #cbcbcb);
    border-color: #cbcbcb;
  }

  .gatsby-highlight .copy-button:active {
    background-color: #cbcbcb;
    background-image: linear-gradient(#cbcbcb, #bababa);
    border-color: #bababa;
  }

  .gatsby-highlight .keyword,
  .gatsby-highlight .tag,
  .gatsby-highlight .css .class,
  .gatsby-highlight .css .id,
  .gatsby-highlight .lisp .title,
  .gatsby-highlight .nginx .title,
  .gatsby-highlight .request,
  .gatsby-highlight .status,
  .gatsby-highlight .clojure .attribute {
    color: #e3ceab;
  }

  .gatsby-highlight .django .template_tag,
  .gatsby-highlight .django .variable,
  .gatsby-highlight .django .filter .argument {
    color: #dcdcdc;
  }

  .gatsby-highlight .number,
  .gatsby-highlight .date {
    color: #8cd0d3;
  }

  .gatsby-highlight .dos .envvar,
  .gatsby-highlight .dos .stream,
  .gatsby-highlight .variable,
  .gatsby-highlight .apache .sqbracket {
    color: #efdcbc;
  }

  .gatsby-highlight .dos .flow,
  .gatsby-highlight .diff .change,
  .gatsby-highlight .python .exception,
  .gatsby-highlight .python .built_in,
  .gatsby-highlight .literal,
  .gatsby-highlight .tex .special {
    color: #efefaf;
  }

  .gatsby-highlight .diff .chunk,
  .gatsby-highlight .subst {
    color: #8f8f8f;
  }

  .gatsby-highlight .dos .keyword,
  .gatsby-highlight .python .decorator,
  .gatsby-highlight .title,
  .gatsby-highlight .haskell .type,
  .gatsby-highlight .diff .header,
  .gatsby-highlight .ruby .class .parent,
  .gatsby-highlight .apache .tag,
  .gatsby-highlight .nginx .built_in,
  .gatsby-highlight .tex .command,
  .gatsby-highlight .prompt {
    color: #efef8f;
  }

  .gatsby-highlight .dos .winutils,
  .gatsby-highlight .ruby .symbol,
  .gatsby-highlight .ruby .symbol .string,
  .gatsby-highlight .ruby .string {
    color: #dca3a3;
  }

  .gatsby-highlight .diff .deletion,
  .gatsby-highlight .string,
  .gatsby-highlight .tag .value,
  .gatsby-highlight .preprocessor,
  .gatsby-highlight .pragma,
  .gatsby-highlight .built_in,
  .gatsby-highlight .sql .aggregate,
  .gatsby-highlight .javadoc,
  .gatsby-highlight .smalltalk .class,
  .gatsby-highlight .smalltalk .localvars,
  .gatsby-highlight .smalltalk .array,
  .gatsby-highlight .css .rules .value,
  .gatsby-highlight .attr_selector,
  .gatsby-highlight .pseudo,
  .gatsby-highlight .apache .cbracket,
  .gatsby-highlight .tex .formula,
  .gatsby-highlight .coffeescript .attribute {
    color: #cc9393;
  }

  .gatsby-highlight .shebang,
  .gatsby-highlight .diff .addition,
  .gatsby-highlight .comment,
  .gatsby-highlight .java .annotation,
  .gatsby-highlight .template_comment,
  .gatsby-highlight .pi,
  .gatsby-highlight .doctype {
    color: #7f9f7f;
  }

  .gatsby-highlight .coffeescript .javascript,
  .gatsby-highlight .javascript .xml,
  .gatsby-highlight .tex .formula,
  .gatsby-highlight .xml .javascript,
  .gatsby-highlight .xml .vbscript,
  .gatsby-highlight .xml .css,
  .gatsby-highlight .xml .cdata {
    opacity: 0.5;
  }

  #post-contents {
    table {
      margin: 16px 0 0;
    }

    tr {
      background-color: ${({ theme: { backgroundColor } }) => backgroundColor};
    }

    tr:nth-child(2n) {
      background-color: #f6f8fa;
    }

    th {
      font-weight: 700;
    }

    th,
    td {
      padding: 4px 12px;
      border: 1px solid #eee;
    }

    ol {
      margin: 16px 0 0;
      padding: 0 0 0 20px;
      list-style: decimal;
    }

    ul {
      margin: 16px 0 0;
      padding: 0 0 0 20px;
      list-style: square;
    }
  }
`;

const PostTemplate = props => (
  <Layout {...props}>
    <StylesWrapper>
      <Post {...props} />
    </StylesWrapper>
  </Layout>
);

export default PostTemplate;

export const pageQuery = graphql`
  query PostByPath($path: String!) {
    markdownRemark (
      frontmatter: { path: { eq: $path } }
    ) {
      id
      html
      frontmatter {
        title
        path
        images
        category
        tags
        date
        components {
          rootId
          fileName
        }
        tweets {
          rootId
          userId
          tweetId
        } summary
      }
    }
  }
`;
