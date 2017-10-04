import React, { PureComponent } from 'react';

class App extends PureComponent {
  static handleClick(e) {
    alert(e.currentTarget.tagName);

    if (e.stopPropagation) {
      e.stopPropagation();
    } else {
      e.cancelBubble = true;
    }
  }

  render() {
    return (
      <main onClick={App.handleClick}>
        <section onClick={App.handleClick}>
          <div onClick={App.handleClick}>
            <button onClick={App.handleClick}>Click!</button>
          </div>
        </section>
      </main>
    );
  }
}

export default App;
