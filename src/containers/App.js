import React from 'react';
import uuid from 'uuid'; //polecenie"zaimportuj ją do aplikacji - czy tu?
import { hot } from 'react-hot-loader';
import style from './App.css';
import Title from '../components/Title.js';
import TodoList from '../components/TodoList.js';
import TodoForm from '../components/TodoForm.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [{
            id: 1,    
            text: 'learn javascript'
            }, {
            id: 2,
            text: 'learn react'
            }, {
            id: 3,
            text: 'feed my family'
            }]
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
      const remainder = this.state.data.filter(todo => todo.id !== id);
      this.setState({data: remainder});
    }
    render() {
    return (
        <div className={style.TodoApp}>
            <Title 
              elementsLength={this.state.data.length}
            />
            <TodoForm add={this.addTodo.bind(this)}
            />
            <TodoList taskList={this.state.data} remove={this.removeTodo.bind(this)} 
            />    
        </div>
    );
  }
}

export default hot(module)(App);