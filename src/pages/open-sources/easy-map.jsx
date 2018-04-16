import React, { PureComponent } from 'react';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import { easyMapGoogle, easyMapNaver, easyMapDaum } from '~/utils/getMaps';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

export default class EasyMapComponent extends PureComponent {
  componentDidMount() {
    const map1 = easyMapGoogle(this.$googleMap);
    const map2 = easyMapNaver(this.$naverMap);
    const map3 = easyMapDaum(this.$daumMap);

    map1.start();
    map2.start();
    map3.start();
  }

  render() {
    return (
      <OpenSourceWrapper>
        <Helmet>
          <title>WONISM | Easy Map</title>
          <meta name="og:title" content="WONISM | Easy Map" />
        </Helmet>
        <Repository className="react-github-info--component" username="wonism" repos="easy-map" />
        <br /><br />
        <div className="map" ref={(div) => { this.$googleMap = div; }} />
        <br /><br />
        <div className="map" ref={(div) => { this.$naverMap = div; }} />
        <br /><br />
        <div className="map" ref={(div) => { this.$daumMap = div; }} />
        <br /><br />
      </OpenSourceWrapper>
    );
  }
}

/* eslint-disable no-undef */
export const easyMapComponent = graphql`
  query EasyMapComponentQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
/* eslint-enable no-undef */
