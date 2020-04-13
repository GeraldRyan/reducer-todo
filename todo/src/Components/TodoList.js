// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'


export default class TodoList extends React.Component
{
  state = {
    todos: []
  }


  addTodo = todo =>
  {
    this.setState({
      todos: [todo, ...this.state.todos]
    })

    // console.log(this.state.todos)
  }

  render()
  {
    return (
      <div>
        <h2>:: My Tasks ::</h2>
        {this.props.tasks.map(todo => (
          <Todo key={todo.id} 
          completed={todo.completed} 
          task={todo.task}
          id={todo.id} 
          toggleCompleted={this.props.toggleCompleted}/>
        ))}
      </div>
    )
  }

}