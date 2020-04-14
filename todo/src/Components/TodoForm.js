import React from 'react'


class TodoForm extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state ={text:""}
  }

  handleChange = (event) =>
  {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (e) =>
  {
    e.preventDefault()
    const newTask = {
      task: this.state.text,
      id: Date.now(),
      completed: false
    }
    this.props.addTask(newTask)
  }

  render()
  {
    return (

      <div>
        <h1>Welcome to Today </h1>
        <form onSubmit={this.handleSubmit} action="">
          <input name="text"
            type="text"
            onChange={this.handleChange}
            placeholder="enter your task"
            value={this.state.text} />
          <button  >Add Todo</button>
          <button onClick={this.props.clearCompleted}>Clear Completed</button>
          <br/>
          <br/>

        </form>
        {/* <p>{this.props.todo.task}</p> */}
      </div>
    )
  }
}

export default TodoForm