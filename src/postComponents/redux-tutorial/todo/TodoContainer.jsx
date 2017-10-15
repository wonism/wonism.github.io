import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  addTodo,
  removeTodo,
  toggleTodo,
} from './TodoActions';
import Todo from './Todo';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: bindActionCreators(addTodo, dispatch),
  removeTodo: bindActionCreators(removeTodo, dispatch),
  toggleTodo: bindActionCreators(toggleTodo, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
