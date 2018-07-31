import React from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';


const TodoList = ({ todos, receiveTodo }) => {
  return (
    <div>
      <h1>Our Todo List</h1>
      <ul>
        {todos.map( (todo) =>
          <TodoListItem key={todo.id} todo = {todo}/>
        )}
      </ul>
      <div><TodoForm receiveTodo={receiveTodo} /></div>
    </div>
  )
};

export default TodoList;
