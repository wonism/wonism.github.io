/** @jsx createElement */
import { createElement, PureComponent } from 'react';

class App extends PureComponent {
  static speak(text) {
    if (typeof window.SpeechSynthesisUtterance === 'undefined' || typeof window.speechSynthesis === 'undefined') {
      alert('This browser does not support speech API'); // eslint-disable-line no-alert
      return;
    }

    const message = new window.SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices();

    message.voice = voices[0];
    window.speechSynthesis.speak(message);
  }

  constructor(props) {
    super(props);
    this.state = {
      text: '안녕하세요!',
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    App.speak(this.state.text);
  }

  handleChange(e) {
    const text = e.target.value;

    this.setState({
      text,
    });
  }

  render() {
    return (
      <main>
        <textarea
          value={this.state.text}
          onChange={this.handleChange}
        />
        <div>
          <button onClick={this.handleClick}>Click!</button>
        </div>
      </main>
    );
  }
}

export default App;
