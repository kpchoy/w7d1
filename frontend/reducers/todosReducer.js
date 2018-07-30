import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions.js";
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};





const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_TODOS:
      const newState = [...state, ...action.todos];
      return newState;
    case RECEIVE_TODO:
      let nextState = merge({}, state);
      const todo = {
        id: action.todo.id,
        title: action.todo.title,
        body: action.todo.body,
        done: false
      };
      nextState[action.todo.id] = todo;
      return nextState;
    default:
      return state;
  }
};


export default todosReducer;
