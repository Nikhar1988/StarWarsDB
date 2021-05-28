import React from 'react';

import './todo-list-item.css';

const TodoListItem = ({ label, important = false, taskStatus, onDoneTask, onImportantTask, onDeliteTask }) => {



  const taskDone = taskStatus ? "todo-list-item done" : "todo-list-item";

  const style = {
    color: important ? 'steelblue' : 'black',
    fontWeight: important ? 'bold' : 'normal',

  };
  return (
    <span className={taskDone} >
      <span
        className="todo-list-item-label"
        onClick={onDoneTask}
        style={style}>
        {label}
      </span>

      <button type="button"
        className="btn btn-outline-success btn-sm float-right"
        onClick={onImportantTask}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button"
        className="btn btn-outline-danger btn-sm float-right"
        onClick={onDeliteTask}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );

}


export default TodoListItem;







