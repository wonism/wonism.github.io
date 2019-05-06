import React, { PureComponent } from 'react';
import { any, func } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { Repository } from 'react-github-info';
import Feed from 'react-instagram-feed';
import * as appActions from '~/store/app/actions';
import Layout from '~/components/Layout';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.scss';

const Frame = styled.div`
  display: block;
  margin: 0 auto 12px;;
  width: 100%;
  max-width: 360px;
  text-align: left;

  blockquote {
    margin: 4px 0 0;
    padding: 12px 0 12px 4px;
    border-left: 6px solid #aaa;

    &:empty {
      display: none;
    }
  }

  img {
    width: 100%;
    height: auto;
    z-index: 1;
  }

  .igf-like,
  .igf-comment {
    display: inline-block;
    padding: 0 4px;
    line-height: 1em;
    font-size: 12px;
    text-decoration: blink;
    z-index: 5;
  }

  .igf-like:after {
    float: left;
    content: '❤️';
  }

  .igf-comment:after {
    float: left;
    content: '💬';
  }
`;

const Clearfix = styled.div`
  &:before,
  &:after {
    display: block;
    content: '';
    clear: both;
  }
`;

const Wrapper = ({
  children,
}) => (
  <Frame>
    {children}
  </Frame>
);

Wrapper.propTypes = {
  children: any, // eslint-disable-line react/forbid-prop-types
};

Wrapper.defaultProps = {
  children: null,
};

class ReactInstagramFeed extends PureComponent {
  static propTypes = {
    historyGoBack: func.isRequired,
  };

  state = {
    forceNext: null,
  };

  updateForceNext = () => {
    this.setState({
      forceNext: Date.now(),
    });
  };

  render() {
    return (
      <OpenSourceWrapper>
        <Helmet>
          <title>WONISM | REACT INSTAGRAM FEED</title>
          <meta name="og:title" content="WONISM | REACT INSTAGRAM FEED" />
        </Helmet>
        <Repository username="wonism" repos="react-instagram-feed" />
        <br />
        <br />
        <Feed
          accessToken="7033819444.3598385.338046e1f1634dc58697dc8b5d91425a"
          count={4}
          type="user"
          param="self"
          resolution="low"
          hasLink
          wrapper={Wrapper}
          buttonText="Fetch (from inside of ReactInstagramFeed component)"
          before={() => { console.log('Before fetching feeds'); }}
          after={() => { console.log('After fetching feeds'); }}
          forceNext={this.state.forceNext}
        />
        <Clearfix />
        <button onClick={this.updateForceNext}>
          Fetch (from outside of ReactInstagramFeed component)
        </button>
        <br /><br />
        <button onClick={this.props.historyGoBack}>← Go back</button>
        <br /><br />
      </OpenSourceWrapper>
    );
  }
}

ReactInstagramFeed.propTypes = {
  historyGoBack: func.isRequired,
};

const ConnectedReactInstagramFeed = connect(
  () => ({}),
  {
    historyGoBack: appActions.historyGoBack,
  }
)(ReactInstagramFeed);

const ReactInstagramFeedLayout = props => (
  <Layout {...props}>
    <ConnectedReactInstagramFeed />
  </Layout>
);

export default ReactInstagramFeedLayout;
