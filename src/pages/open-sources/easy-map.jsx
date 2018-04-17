import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import { historyGoBack } from '~/store/app/actions';
import { easyMapGoogle, easyMapNaver, easyMapDaum } from '~/utils/getMaps';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';

class EasyMapComponent extends PureComponent {
  static propTypes = {
    historyGoBack: PropTypes.func.isRequired,
  };

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
        <button onClick={this.props.historyGoBack}>← Go back</button>
        <br /><br />
      </OpenSourceWrapper>
    );
  }
}

export default connect(
  () => ({}),
  {
    historyGoBack,
  }
)(EasyMapComponent);

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
