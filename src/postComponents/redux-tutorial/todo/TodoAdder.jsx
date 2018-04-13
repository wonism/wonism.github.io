import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoAdder extends PureComponent {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = this.$input.value;

    if (todo) {
      this.props.addTodo(todo);
      this.$input.value = '';
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <input
            ref={($input) => {
              this.$input = $input;
            }}
            type="text"
          />
          <button>Add</button>
        </fieldset>
      </form>
    );
  }
}
