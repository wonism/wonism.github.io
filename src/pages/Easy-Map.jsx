import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import fp from 'lodash/fp';
import GoogleAds from 'react-google-ads';
import { Repository } from 'react-github-info';
import { googleMap, naverMap } from '../utils/getMaps';
import './open-sources.scss';

export default class EasyMapComponent extends PureComponent {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const map1 = googleMap(this.$googleMap);
    const map2 = naverMap(this.$naverMap);

    map1.start();
    map2.start();
  }

  render() {
    const { data } = this.props;
    const siteTitle = fp.get('site.siteMetadata.title')(data);

    return (
      <div className="main-container">
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="keyword" content="JavaScript, Front-end, Developer" />
          <meta name="og:title" content={siteTitle} />
        </Helmet>
        <Repository className="react-github-info--component" username="wonism" repos="easy-map" />
        <br />
        <br />
        <div className="map-renderer" ref={(div) => { this.$googleMap = div; }} />
        <div className="map-renderer" ref={(div) => { this.$naverMap = div; }} />
        <GoogleAds
          client="ca-pub-1777052704513089"
          slot="4491507809"
          style={{ display: 'inline-block', width: '100%' }}
        />
      </div>
    );
  }
}

/* eslint-disable no-undef */
export const easyMapComponent = graphql`
  query EasyMapComponentQuery {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
/* eslint-enable no-undef */
