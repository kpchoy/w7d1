import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store.js';
import { receiveTodo, receiveTodos, newTodos } from './actions/todo_actions.js';
import Root from './components/root.jsx';
import allTodos from './reducers/selectors.js';

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.newTodos = newTodos;
  window.allTodos = allTodos;
});
