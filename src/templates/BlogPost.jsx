import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import Helmet from 'react-helmet';
import { Tweet } from 'react-twitter-widgets';
import PropTypes from 'prop-types';
import GoogleAds from 'react-google-ads';
import fp from 'lodash/fp';
import Rx from 'rxjs';
import Clipboard from 'clipboard';
import Bio from '../components/Bio';
import { SITE_URL } from '../constants';

export default class BlogPostTemplate extends PureComponent {
  componentDidMount() {
    const clipboard = new Clipboard('.copy-button', {
      target: fp.get('previousElementSibling'),
    });

    clipboard.on('success', (e) => {
      e.clearSelection();
    });

    const { data, location } = this.props;
    const slug = fp.get('pathname')(location);
    const disqusConfig = 'discus_config';

    const sources = document.querySelectorAll('.gatsby-highlight');
    const sources$ = Rx.Observable.from(sources);

    sources$.subscribe((source) => {
      const button = document.createElement('button');
      button.setAttribute('class', 'copy-button');
      button.innerHTML = 'COPY';
      source.appendChild(button);
    });

    window[disqusConfig] = function disqusCallback() {
      this.page.url = `${SITE_URL}${slug}`;
      this.page.identifier = slug;
      this.page.title = fp.get('markdownRemark.frontmatter.title')(data);
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
      const App = require(`../postComponents/${componentFileName}`); // eslint-disable-line

      render(<div className={`react-component-in-post ${componentRootId}`}><App /></div>, componentContainer$);
    })(components);
  }

  render() {
    const { data } = this.props;
    const post = fp.get('markdownRemark')(data);
    const siteTitle = fp.get('site.siteMetadata.title')(data);
    const title = `${fp.get('frontmatter.title')(post)} | ${siteTitle}`;
    const tags = fp.get('frontmatter.tags')(post);

    return (
      <div className="post">
        <Helmet>
          <title>{title}</title>
          <meta name="keyword" content={fp.join(', ')(tags)} />
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
        {tags.length ? (
          <p className="post-tags clearfix">
            <i className="fa fa-tags tag-icon" />
            {fp.map(tag => (
              <a key={tag} href={`/tags/${tag}`}>
                {tag}
              </a>
            ))(tags)}
          </p>
        ) : null}
        {/* eslint-disable react/no-danger */}
        <div dangerouslySetInnerHTML={{ __html: fp.get('html')(post) }} />
        {/* eslint-enable react/no-danger */}
        {/*
        <div className="text-right none">
          <h4>Share</h4>
        </div>
        */}
        <div id="disqus_thread" />
        <noscript>
          Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a>
        </noscript>
        <hr />
        <GoogleAds
          client="ca-pub-1777052704513089"
          slot="4491507809"
          style={{ display: 'inline-block', width: '100%' }}
        />
        <hr />
        <Bio />
      </div>
    );
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.shape({ date: PropTypes.object }).isRequired,
  location: PropTypes.shape({}).isRequired,
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
        category
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
