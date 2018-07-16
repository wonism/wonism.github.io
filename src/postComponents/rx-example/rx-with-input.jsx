/** @jsx createElement */
import { createElement, PureComponent } from 'react';
import Rx from 'rxjs';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      subscription: null,
      updateCount: 0,
    };
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    const subscription = Rx.Observable
      .fromEvent(this.$input, 'input')
      .pluck('target', 'value')
      .subscribe(() => {});

    this.setState({
      subscription,
    });
    /* eslint-enable react/no-did-mount-set-state */
  }

  componentDidUpdate(prevProps, prevState) {
    /* eslint-disable react/no-did-update-set-state */
    if (prevState.id !== this.state.id) {
      this.state.subscription.unsubscribe();
      this.setState({
        updateCount: this.state.updateCount + 1,
      });
    }

    if (this.state.updateCount !== prevState.updateCount) {
      switch (this.state.id) {
        case 'debounceTime': {
          const subscription = Rx.Observable
            .fromEvent(this.$input, 'input')
            .pluck('target', 'value')
            .debounceTime(400)
            .subscribe((value) => { console.log(value); this.setState({ value }); });
          this.setState({
            subscription,
          });
          break;
        }
        case 'distinctUntilChanged': {
          const subscription = Rx.Observable
            .fromEvent(this.$input, 'input')
            .pluck('target', 'value')
            .debounceTime(400)
            .distinctUntilChanged()
            .subscribe((value) => { console.log(value); this.setState({ value }); });
          this.setState({
            subscription,
          });
          break;
        }
        case 'throttleTime': {
          const subscription = Rx.Observable
            .fromEvent(this.$input, 'input')
            .throttleTime(400)
            .pluck('target', 'value')
            .subscribe((value) => { console.log(value); this.setState({ value }); });
          this.setState({
            subscription,
          });
          break;
        }
        default:
          break;
      }
    }
    /* eslint-enable react/no-did-update-set-state */
  }

  render() {
    return (
      <div>
        <span>Selected Option: {this.state.id}</span>
        <br />
        <button onClick={() => { this.setState({ id: 'debounceTime' }); }}>Debounce Time</button>
        &nbsp;
        <button onClick={() => { this.setState({ id: 'distinctUntilChanged' }); }}>Distinct Until Changed</button>
        &nbsp;
        <button onClick={() => { this.setState({ id: 'throttleTime' }); }}>Throttle Time</button>
        <br />
        <input ref={(input) => { this.$input = input; }} type="text" />
        <br />
        <span>Value: {this.state.value}</span>
        <br />
        <span>(You can check this in also console)</span>
      </div>
    );
  }
}

export default App;
