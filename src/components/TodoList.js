import React from 'react';

import TodoListItem from './TodoListItem';
import { todoListState } from './../atoms';
import { useRecoilValue } from 'recoil';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);

  return (
    <ul>
    { todoList.map(todoItem => <TodoListItem key={todoItem.id} todo={todoItem}/>)}
    </ul>
  )
}

export default TodoList;