import React, { Component } from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';
import ItemAddForm from '../item-add-form/';

export default class App extends Component {

  maxId = 100;

  state = {
    searchData: '',
    active: 'all',
    listData: '',
    data: [
      { label: 'Drink Coffee', important: false, taskStatus: false, id: 1 },
      { label: 'Make Awesome App', important: true, taskStatus: false, id: 2 },
      { label: 'Have a lunch', important: false, taskStatus: false, id: 3 }
    ]
  }

  onActiveDone = (items, value) => {

    console.log(value)
    switch (value) {
      case 'noDone':
        return items.filter(item => item.taskStatus);


      case 'done':
        return items.filter(item => !item.taskStatus);


      case 'all':
        return items

      default:
        console.log('неполучилось')
    }
  }



  searchListData = (items, searchData) => {
    if (searchData.length === 0) {
      return items
    }

    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(searchData.toLowerCase()) > -1
    })
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
    const newItem = { ...arr[index], [propDeal]: !arr[index][propDeal] };
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
    this.setState(({ data }) => {
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

  onUpdateSearch = (searchData) => {
    this.setState({ searchData })
  }

  onActive = (activ) => {
    console.log(activ)
    this.setState({ active: activ })
  }



  render() {

    const { data, listData, searchData, active } = this.state;
    const done = this.state.data.filter(item => item.taskStatus === true).length;

    const viewdata = this.onActiveDone(this.searchListData(data, searchData), active)
    console.log(viewdata)
    console.log(searchData)
    const todo = data.length - done;
    return (
      <div className="todo-app">
        <AppHeader toDo={todo} done={done} />
        <div className="top-panel d-flex">
          <SearchPanel onUpdate={this.onUpdateSearch} />
          <ItemStatusFilter onActiveDone={this.onActive} />
        </div>

        <TodoList
          todos={viewdata}
          onDoneTask={this.onDoneTask}
          onImportantTask={this.onImportantTask}
          onDeliteTask={this.onDeliteTask} />
        <ItemAddForm listData={listData} onSubmit={this.onSubmit} onLabelChange={this.onLabelChange} />
      </div>
    );
  }
}



