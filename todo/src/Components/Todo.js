import React from 'react'
import './Todo.css'

export default function Todo(props)
{
  return (
    <div
    id={props.id}
    className={`task${props.completed ? ' completed' : ''}`}
    onClick={() => props.toggleCompleted(props.id)}
    >
      <p >{props.task}</p>
    </div>
)}