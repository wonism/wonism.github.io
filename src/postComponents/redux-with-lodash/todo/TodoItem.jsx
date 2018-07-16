/** @jsx createElement */
import { createElement, PureComponent } from 'react';
import { string, number, bool, func } from 'prop-types';

export default class TodoItem extends PureComponent {
  static propTypes = {
    index: number.isRequired,
    todo: string.isRequired,
    done: bool.isRequired,
    toggleTodo: func.isRequired,
    removeTodo: func.isRequired,
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
