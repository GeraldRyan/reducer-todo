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
    this.setState({text:""})
  }

  render()
  {
    return (

      <div>
        <h1>Welcome to Today </h1>
        <form  action="">
          <input name="text"
            type="text"
            onChange={this.handleChange}
            placeholder="enter your task"
            value={this.state.text} />
          <button onClick = {this.handleSubmit} >Add Todo</button>
          <br/>
          <br/>

        </form>
        <button onClick={this.props.clearCompleted}>Clear Completed</button>

        {/* <p>{this.props.todo.task}</p> */}
      </div>
    )
  }
}

export default TodoForm