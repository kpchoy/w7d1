import React from 'react';

export const allTodos = (state) => {
  const keys = Object.keys(state.todos);
  return keys.map( el => state.todos[el]);
};
