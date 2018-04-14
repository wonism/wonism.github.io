import React, { Component } from 'react';

const logClosure = () => {
  let clickedCount = 0;
  let reRenderedCount = -1;

  return function log(isReRendered) {
    if (isReRendered) {
      reRenderedCount += 1;
    } else {
      clickedCount += 1;
    }

    this.pTag.textContent = `log -> click count : ${clickedCount} | re-render count : ${reRenderedCount}`;
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.pTag = document.createElement('p');
    this.handleClick = this.handleClick.bind(this);
    this.log = logClosure().bind(this);
  }

  componentDidMount() {
    this.root = document.querySelector('.component-example .root');
    this.root.after(this.pTag);
  }

  handleClick() {
    this.log(false);

    if (Math.floor(Math.random() * 10) % 2) {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else {
      this.setState({
        counter: this.state.counter,
      });
    }
  }

  render() {
    this.log(true);

    return (
      <div className="component-example root">
        {this.state.counter}
        <br />
        <br />
        <input
          type="button"
          onClick={this.handleClick}
          value="click"
        />
      </div>
    );
  }
}

export default App;
