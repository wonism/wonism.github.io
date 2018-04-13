import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class TodoItem extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    todo: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    toggleTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
  };

  render() {
    const { index, todo, done, toggleTodo, removeTodo } = this.props;

    return (
      <li>
        <input
          id={`check-${todo}`}
          type="checkbox"
          defaultChecked={done}
          style={{ cursor: 'pointer' }}
          onClick={() => { toggleTodo(index); }}
        />
        <label htmlFor={`check-${todo}`} style={{ margin: '0 20px 0 10px', cursor: 'pointer' }}>
          {todo}
        </label>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => { removeTodo(index); }}
        >
          X
        </button>
      </li>
    );
  }
}
