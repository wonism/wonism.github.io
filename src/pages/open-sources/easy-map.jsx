/** @jsx createElement */
import { createElement, PureComponent } from 'react';
import { func } from 'prop-types';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Repository } from 'react-github-info';
import * as appActions from '~/store/app/actions';
import Layout from '~/components/Layout';
import { easyMapGoogle, easyMapNaver, easyMapDaum } from '~/utils/getMaps';
import OpenSourceWrapper from '~/components/Common/OpenSourceWrapper';
import './index.scss';

class EasyMapComponent extends PureComponent {
  static propTypes = {
    historyGoBack: func.isRequired,
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
          <title>WONISM | EASY MAP</title>
          <meta name="og:title" content="WONISM | EASY MAP" />
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

const ConnectedEasyMap = connect(
  () => ({}),
  {
    historyGoBack: appActions.historyGoBack,
  }
)(EasyMapComponent);

const EasyMapLayout = props => (
  <Layout {...props}>
    <ConnectedEasyMap />
  </Layout>
);

export default EasyMapLayout;
