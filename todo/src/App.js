
import './App.css';
import React from 'react';
import TodoCount from './components/TodoCount';
import ListingTodos from './components/ListingTodos';
import AddTodo from './components/AddTodo';
import './components/Todo.css';


class App extends React.Component{
  constructor(){
    super();
    this.state={
      todos : ['item1','item2','item3'],
      value : ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleTodos = this.handleTodos.bind(this);
    this.deleteTodos = this.deleteTodos.bind(this);
  }

  handleChange(e){
    this.setState({
      value:e.target.value
    })
  }

  handleTodos(e){
    e.preventDefault();
  if(this.state.value !==  "" && !(this.state.todos.includes(this.state.value))) {
    this.setState({
      todos: [...this.state.todos,this.state.value]
    })
  }
    else alert(`Given task is null or already added`);

    this.setState({
      value:""
    })
  }

  deleteTodos(name){
    this.setState({
      todos : this.state.todos.filter(element => element !== name)
    })
  }
  render(){

    return (
      <div style={{background:'red'}} className='App'>
      <div className='main-div'>
      <div className="count">
      <TodoCount todos={this.state.todos}/>
      </div>
      <br />
      <div className='add'>
      <AddTodo val={this.state.value} setTodos={this.handleTodos} change={this.handleChange}/>
      </div>
      <br />
      <div className='list'>
      <ListingTodos todos={this.state.todos} removeTodo={this.deleteTodos}/>
      </div>
      </div>
      
      </div>
    
  );
  }
  
}

export default App;
