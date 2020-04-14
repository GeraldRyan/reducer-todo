import React from 'react';
import TodoForm from './Components/TodoForm'
import TodoList from './Components/TodoList'
import './App.css'
import {reducer, todoArray} from './reducers/reducer'


const tasks = [{
  task: '',
  id: Date.now(),
  completed: false
}]

function App()
{
  // this.state = {
  //   tasks



  const [state, dispatch] = React.useReducer(reducer, todoArray)

  function toggleCompleted (itemID)
  {
    // console.log(itemID)
    // map over array
    // when we find item we clicked, toggle completed field else return item untouched
    dispatch({type:"COMPLETED", payload:itemID})
    
  }

  const addTask = (t) =>
  {
  
    dispatch({type: "ADDING", payload:t})
    // console.log("t is for task:", t)  //pass
    // console.log("tasks:", this.state.tasks)  //pass
    // console.log("newTask:", newTask) //pass
  }
// console.log("state", state)
  const clearCompleted = e =>
  {
    dispatch({type:"CLEAR"})
  }
// console.log('state',state)

  return (
    <div>
      <TodoForm addTask={addTask} clearCompleted={clearCompleted}></TodoForm>
      <TodoList state={state} toggleCompleted={toggleCompleted} ></TodoList>
    </div>
  );

}

export default App;
