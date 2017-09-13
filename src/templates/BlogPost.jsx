import React, { Component } from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';
import { Tweet } from 'react-twitter-widgets';
import PropTypes from 'prop-types';
import GoogleAds from 'react-google-ads';
import fp from 'lodash/fp';
import Bio from '../components/Bio';
import { SITE_URL } from '../constants';

export default class BlogPostTemplate extends Component {
  static propTypes = {
    data: PropTypes.shape({ date: PropTypes.object }).isRequired,
    location: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const { data, location } = this.props;
    const slug = fp.get('pathname')(location);
    const disqusConfig = 'discus_config';
    const content$ = this.refs.content;

    window[disqusConfig] = function () {
      this.page.url = `${SITE_URL}${slug}`;
      this.page.identifier = slug;
      this.page.title = fp.get('markdownRemark.frontmatter.title')(post);
    };

    const d = document;
    const s = d.createElement('script');
    s.src = 'https://jaewonism.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);

    const tweets = fp.get('markdownRemark.frontmatter.tweets')(data);
    const components = fp.get('markdownRemark.frontmatter.components')(data);

    fp.each((tweet) => {
      const tweetRootId = fp.get('rootId')(tweet);
      const tweetContainer$ = document.getElementById(tweetRootId);
      const tweetId = fp.get('tweetId')(tweet);
      const username = fp.get('userId')(tweet);

      render(<Tweet
        tweetId={tweetId}
        options={{
          username,
        }}
      />, tweetContainer$);
    })(tweets);

    fp.each((component) => {
      const componentRootId = fp.get('rootId')(component);
      const componentContainer$ = document.getElementById(componentRootId);
      const componentFileName = fp.get('fileName')(component);
      const App = require(`../postComponents/${componentFileName}`);

      render(<div className={`react-component-in-post ${componentRootId}`}><App /></div>, componentContainer$);
    })(components);
  }

  render() {
    const { data, location } = this.props;
    const post = fp.get('markdownRemark')(data);
    const siteTitle = fp.get('site.siteMetadata.title')(data);
    const title = `${fp.get('frontmatter.title')(post)} | ${siteTitle}`;
    const slug = fp.get('pathname')(location);
    const disqusConfig = {
      url: `${SITE_URL}${slug}`,
      identifier: slug,
      title: fp.get('frontmatter.title')(post),
    };

    return (
      <div className="post">
        <Helmet>
          <title>{title}</title>
          <meta name="keyword" content={fp.join(', ')(fp.get('frontmatter.tags')(post))} />
          <meta name="description" content={fp.get('frontmatter.summary')(post)} />
          <meta name="author" content="wonism" />
          <meta name="og:title" content={title} />
        </Helmet>
        <h1>
          {fp.get('frontmatter.title')(post)}
        </h1>
        <p>
          {fp.get('frontmatter.date')(post)}
        </p>
        {/* eslint-disable react/no-danger */}
        <div ref="content" dangerouslySetInnerHTML={{ __html: fp.get('html')(post) }} />
        {/* eslint-enable react/no-danger */}
        <div id="disqus_thread" />
        <noscript>
          Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
        <hr />
        <GoogleAds
          client="ca-pub-1777052704513089"
          slot="4491507809"
          style={{ display: 'inline-block', width: '100%', }}
        />
        <hr />
        <Bio />
      </div>
    );
  }
};

/* eslint-disable no-undef */
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
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
        path
        tags
        date(formatString: "MMMM DD, YYYY")
        summary
        components {
          rootId
          fileName
        }
        tweets {
          rootId
          userId
          tweetId
        }
        isNotPost
      }
    }
  }
`;
/* eslint-enable no-undef */
