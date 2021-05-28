import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import ItemAddForm from '../item-add-form/';

export default class App extends Component {

  maxId = 100;

  state = {

    data: [
      { label: 'Drink Coffee', important: false, taskStatus: false, id: 1 },
      { label: 'Make Awesome App', important: true, taskStatus: false, id: 2 },
      { label: 'Have a lunch', important: false, taskStatus: false, id: 3 }
    ]
  }

  onDoneTask = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newItem = { ...data[index], taskStatus: !data[index].taskStatus };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }

    })
  }

  onDeliteTask = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr
      }
    })
  }

  onImportantTask = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const newItem = { ...data[index], important: !data[index].important };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {
        data: newArr
      }

    })
  }

  onAddData = () => {
    this.setState(({ data }) => {
      const newItem = {
        label: 'text',
        important: false,
        taskStatus: false,
        id: this.maxId++
      };
      const newArr = [...data, newItem];

      return {
        data: newArr
      }

    })
  }

  render() {
    const { data } = this.state;

    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={data}
          onDoneTask={this.onDoneTask}
          onImportantTask={this.onImportantTask}
          onDeliteTask={this.onDeliteTask} />
        <ItemAddForm onAddData={this.onAddData} />
      </div>
    );
  }
}



