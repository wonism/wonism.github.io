import React, { PureComponent } from 'react';

export default class App extends PureComponent {
  componentDidMount() {
    ((d, s, id) => {
      const element = d.getElementsByTagName(s)[0];
      const fjs = element;
      const js = d.createElement(s);

      if (!d.getElementById('codepen-sdk')) {
        js.id = id;
        js.src = '//assets.codepen.io/assets/embed/ei.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'codepen-sdk');
  }

  render() {
    return (
      <p
        data-height="360"
        data-theme-id="dark"
        data-slug-hash="ZOrEmr"
        data-default-tab="html,result"
        data-user="MadeByMike"
        data-embed-version="2"
        className="codepen"
      >
        See the Pen
        &nbsp;
        <a
          href="http://codepen.io/MadeByMike/pen/ZOrEmr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS only scroll indicator
        </a>
        &nbsp;
        by Mike (
        <a
          href="http://codepen.io/MadeByMike"
          target="_blank"
          rel="noopener noreferrer"
        >
          @MadeByMike
        </a>
        ) on
        &nbsp;
        <a
          href="http://codepen.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodePen
        </a>.
      </p>
    );
  }
}
