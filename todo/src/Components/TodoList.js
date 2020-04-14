// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm'
import Todo from './Todo'
import { reducer, todoArray } from '../reducers/reducer'




export default class TodoList extends React.Component
{
  render()
  {
    return (
      <div>
        <h2>:: My Tasks ::</h2>
        {this.props.state.tasks.map(todo => (
          <Todo key={todo.id}
            completed={todo.completed}
            task={todo.task}
            id={todo.id}
            toggleCompleted={()=> this.props.toggleCompleted(todo.id)} />
        ))}
      </div>
    )
  }

}