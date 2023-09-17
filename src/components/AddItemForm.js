import React, { useState } from 'react';

import { useSetRecoilState } from 'recoil';
import { todoListState } from './../atoms';

const AddItemForm = () => {
  const [todo, setTodo] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = () => {
    if (todo == '' ) return;
    setTodoList(oldTodoList => [
      ...oldTodoList,
      {
        id: oldTodoList.length,
        text: todo
      }
    ]);
    setTodo('');
  }
  return (
    <div>
      <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
      <input type="button" value="Add" onClick={() => addTodo()}/>
    </div>
  )
}

export default AddItemForm;