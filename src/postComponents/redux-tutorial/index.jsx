/** @jsx createElement */
import { createElement, PureComponent } from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import TodoContainer from './todo/TodoContainer';
import TodoReducers from './todo/TodoReducers';

const reducers = combineReducers({ todos: TodoReducers });
const middleware = applyMiddleware(thunk);
const store = createStore(reducers, middleware);

class App extends PureComponent {
  render() {
    return (
      <div>
        <Provider store={store}>
          <TodoContainer />
        </Provider>
      </div>
    );
  }
}

export default App;
