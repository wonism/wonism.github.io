import React, { PureComponent } from 'react';

class App extends PureComponent {
  static handleClick(e) {
    alert(e.currentTarget.tagName); // eslint-disable-line no-alert
  }

  render() {
    return (
      <main onClick={App.handleClick} tabIndex="0" role="button">
        <section onClick={App.handleClick} tabIndex="0" role="button">
          <div onClick={App.handleClick} tabIndex="0" role="button">
            <button onClick={App.handleClick}>Click!</button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
