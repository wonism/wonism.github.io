import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import fp from 'lodash/fp';
import TodoItem from './TodoItem';
import TodoAdder from './TodoAdder';

export default class Todo extends PureComponent {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      todo: PropTypes.string,
      done: PropTypes.bool,
    })).isRequired,
    addTodo: PropTypes.func.isRequired,
    removeTodo: PropTypes.func.isRequired,
    toggleTodo: PropTypes.func.isRequired,
  };

  render() {
    const { todos, addTodo, removeTodo, toggleTodo } = this.props;

    return (
      <div>
        <TodoAdder addTodo={addTodo} />
        <ul>
          {fp.map(({ todo, done }) => {
            const index = fp.findIndex({ todo })(todos);

            return (
              <TodoItem
                key={todo}
                index={index}
                todo={todo}
                done={done}
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
              />
            );
          })(todos)}
        </ul>
      </div>
    );
  }
}
