import React from 'react';

import TodoListItem from '../todo-list-item/';
import './todo-list.css';

const TodoList = ({ todos,  onDoneTask, onImportantTask }) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem {...itemProps } 
        onDoneTask={() => onDoneTask(id) }  
        onImportantTask= {() => onImportantTask(id)}/>
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;