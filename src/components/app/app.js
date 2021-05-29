import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import ItemAddForm from '../item-add-form/';

export default class App extends Component {

  maxId = 100;

  state = {
    listData:'',
    data: [
      { label: 'Drink Coffee', important: false, taskStatus: false, id: 1 },
      { label: 'Make Awesome App', important: true, taskStatus: false, id: 2 },
      { label: 'Have a lunch', important: false, taskStatus: false, id: 3 }
    ]
  }

  onDoneTask = (id) => {
    this.setState(({ data }) => {
      return {
        data: this.toggleProperty(data, id, 'taskStatus')
      }
    })
  }

  toggleProperty(arr, id, propDeal) {
        const index = arr.findIndex((elem) => elem.id === id);
        const newItem = { ...arr[index], [propDeal]: !arr[index][propDeal]};
        return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
        
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
      return {
        data: this.toggleProperty(data, id, 'important')
      }
    })
  }

  
  onSubmit = (e) => {
    e.preventDefault();
    this.setState(({ data}) => {
      const newItem = {
        label: this.state.listData,
        important: false,
        taskStatus: false,
        id: this.maxId++
      };
      const newArr = [...data, newItem];

      return {
        data: newArr,
        listData: ''
      }
    })
  }

  onLabelChange = (e) => {
    this.setState({
      listData: e.target.value
    })
  }
  
  render() {
    const { data, listData } = this.state;
    const done = this.state.data.filter(item => item.taskStatus === true).length;
    const todo = data.length - done;
    return (
      <div className="todo-app">
        <AppHeader toDo={todo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>

        <TodoList
          todos={data}
          onDoneTask={this.onDoneTask}
          onImportantTask={this.onImportantTask}
          onDeliteTask={this.onDeliteTask} />
        <ItemAddForm listData ={listData} onSubmit={this.onSubmit} onLabelChange={this.onLabelChange} />
      </div>
    );
  }
}



