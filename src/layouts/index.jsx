import React, { PureComponent as PC } from 'react';
import firebase from 'firebase';
import Header from './Header';
import scrollTop from '../utils/scroll';

import './index.scss';
import './main.scss';

export default class Template extends PC {
  static propTypes = {
    children: React.PropTypes.func.isRequired,
    // location: React.PropTypes.shape({}).isRequired,
    // route: React.PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDHSFqUK_pEBCm1XO6NNXYAzV0fXtPlemk',
      authDomain: 'wonism-github-io.firebaseapp.com',
      databaseURL: 'https://wonism-github-io.firebaseio.com',
      projectId: 'wonism-github-io',
      storageBucket: '',
      messagingSenderId: '158979946808',
    };

    firebase.initializeApp(config);
  }

  render() {
    const { children } = this.props;

    return (
      <div>
        <Header />
        <main className="container">
          {children()}
        </main>
        <nav className="to-top">
          <button onClick={() => { scrollTop(400); }}>↑</button>
        </nav>
      </div>
    );
  }
}
