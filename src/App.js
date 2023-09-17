import React from "react";
import "./style.css";

import { RecoilRoot } from 'recoil';

import AddItemForm from './components/AddItemForm';
import TodoList from './components/TodoList';

export default function App() {
  return (
    <RecoilRoot>
      <h1>React Recoil - ToDoList</h1>
      <AddItemForm />
      <TodoList />
    </RecoilRoot>
  );
}
