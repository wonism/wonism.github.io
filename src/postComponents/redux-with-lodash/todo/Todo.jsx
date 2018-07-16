/** @jsx createElement */
import { createElement, PureComponent } from 'react';
import { arrayOf, shape, string, bool, func } from 'prop-types';
import { map, findIndex } from 'lodash/fp';
import TodoItem from './TodoItem';
import TodoAdder from './TodoAdder';

export default class Todo extends PureComponent {
  static propTypes = {
    todos: arrayOf(shape({
      todo: string,
      done: bool,
    })).isRequired,
    addTodo: func.isRequired,
    removeTodo: func.isRequired,
    toggleTodo: func.isRequired,
  };

  render() {
    const { todos, addTodo, removeTodo, toggleTodo } = this.props;

    return (
      <div>
        <TodoAdder addTodo={addTodo} />
        <ul>
          {map(({ todo, done }) => {
            const index = findIndex({ todo })(todos);

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
