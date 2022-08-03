
import './App.css';
import React from 'react';
import TodoCount from './components/TodoCount';
import ListingTodos from './components/ListingTodos';
import AddTodo from './components/AddTodo';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      todos : ['item1','item2','item3'],
      value : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleTodos = this.handleTodos.bind(this);
  }

  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }

  handleTodos(e){
    e.preventDefault();
    this.setState({
      todos: [...this.state.todos,this.state.value]
    })

    this.setState({
      value:" "
    })
  }

  render(){

    return (
    <div className="App">
      <TodoCount todos={this.state.todos}/>
      <AddTodo val={this.state.value} setTodos={this.handleTodos} change={this.handleChange}/>
      <ListingTodos todos={this.state.todos} handleDelete={this.deleteTodos}/>
    </div>
  );
  }
  
}

export default App;
