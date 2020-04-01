import React, { Component } from 'react';
import './App.css';
import TodoListHeader from "./TodoListHeader";
import TodoList from "./TodoList";
import Footer from "./Footer";

class App extends Component{
  render(){
    return(
      <div className="App">
        <TodoListHeader />
        <TodoList/>
        <Footer/>
      </div>
    );
  }
}

export default App;

