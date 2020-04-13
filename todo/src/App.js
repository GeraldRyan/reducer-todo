import React from 'react';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import './App.css'


const tasks = [{
  task: '',
  id: Date.now(),
  completed: false
}]

class App extends React.Component
{
  constructor()
  {
    super()
    this.state = {
      tasks
    }
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
  }

  increment = () =>
  {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () =>
  {
    this.setState({
      count: this.state.count - 1
    })
  }


  toggleCompleted = itemID =>{
    console.log(itemID)
    // map over array
    // when we find item we clicked, toggle completed field else return item untouched
    this.setState({
      tasks: this.state.tasks.map(item =>{
        if (itemID === item.id){
          return {
            ...item, 
            completed: !item.completed
          }
        }
        return item;

      })
    })
  }

  addTask = (e, t) =>
  {
    e.preventDefault()
    const newTask = {
      task: t,
      id: Date.now(),
      completed: false
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
    // console.log("t is for task:", t)  //pass
    // console.log("tasks:", this.state.tasks)  //pass
    // console.log("newTask:", newTask) //pass
  }

  clearCompleted = e =>{
    e.preventDefault()
    this.setState({
      tasks: this.state.tasks.filter(item => !item.completed)
    })
  }

  render()
  {
    return (
      <div>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}></TodoForm>
        <TodoList tasks={this.state.tasks} toggleCompleted={this.toggleCompleted} ></TodoList>
      </div>
    );
  }
}

export default App;
