import * as TodoAPIUtil from '../util/todo_api_util';

export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";


export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
});

export const receiveTodo = (todo) => ({
  type: RECEIVE_TODO,
  todo
});
 

export const newTodos = [{
  1: {
    id: 4,
    title: 'eat food',
    body: 'during dinner',
    done: false
  },
  2: {
    id: 83,
    title: 'go to work',
    body: 'on time',
    done: true
  },
}];
