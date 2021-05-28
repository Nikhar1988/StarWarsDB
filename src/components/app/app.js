import React, {Component} from 'react';
import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import TodoList from '../todo-list/';
import ItemStatusFilter from '../item-status-filter/';


export default class App extends Component {
  
  state = {
    
    data: [
      { label: 'Drink Coffee', important: false, taskStatus: false, id: 1 },
      { label: 'Make Awesome App', important: true, taskStatus: false, id: 2 },
      { label: 'Have a lunch', important: false, taskStatus: false,  id: 3 }
    ]
  }
  
  onDoneTask = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex( (elem) => elem.id === id);
      const newItem = {...data[index], taskStatus: !data[index].taskStatus};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {    
          data: newArr
     }   
   
    }) 
  }
  
  onDeliteTask = () => {

  }
  
  onImportantTask = (id) => {
    this.setState(({data}) => {
      const index = data.findIndex( (elem) => elem.id === id);
      const newItem = {...data[index], important: !data[index].important};
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      return {    
          data: newArr
     }   
   
    }) 
  }   
  
  render() {
    const {data} = this.state;
    console.log(data)
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
        onImportantTask={this.onImportantTask}/>
      </div>
    );
  }
}

  
  
