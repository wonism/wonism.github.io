import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      innerHTML: 0,
      insertAdjacentHTML: 0,
    };
    this.innerHTML = this.innerHTML.bind(this);
    this.insertAdjacentHTML = this.insertAdjacentHTML.bind(this);
    this.clear = this.clear.bind(this);
  }

  innerHTML() {
    const now = Date.now();
    for (let i = 0; i < 1000; i += 1) {
      this.$innerHTML.innerHTML += '<div>innerHTML</div>';
    }
    const after = Date.now();
    this.setState({
      innerHTML: after - now,
    });
  }

  insertAdjacentHTML() {
    const now = Date.now();
    for (let i = 0; i < 1000; i += 1) {
      this.$insertAdjacentHTML.insertAdjacentHTML('afterbegin', '<div>innerHTML</div>');
    }
    const after = Date.now();
    this.setState({
      insertAdjacentHTML: after - now,
    });
  }

  clear() {
    this.$insertAdjacentHTML.innerHTML = '';
    this.$innerHTML.innerHTML = '';

    this.setState({
      innerHTML: 0,
      insertAdjacentHTML: 0,
    });
  }

  render() {
    const style = {
      display: 'inline-block',
      float: 'left',
      width: '50%',
      minHeight: '1px',
      maxHeight: '100px',
      overflow: 'auto',
    };

    return (
      <div>
        <h3>Test(in Virtual DOM)</h3>
        <button onClick={this.innerHTML}>
          innerHTML
        </button>
        &nbsp;
        <button onClick={this.insertAdjacentHTML}>
          insertAdjacentHTML
        </button>
        &nbsp;
        <button onClick={this.clear}>
          clear
        </button>
        <br />
        innerHTML : {this.state.innerHTML}
        &nbsp;
        insertAdjacentHTML : {this.state.insertAdjacentHTML}
        <hr />
        <div className="clearfix">
          <div
            style={style}
            ref={(div) => { this.$innerHTML = div; }}
          />
          <div
            style={style}
            ref={(div) => { this.$insertAdjacentHTML = div; }}
          />
        </div>
      </div>
    );
  }
}

export default App;
