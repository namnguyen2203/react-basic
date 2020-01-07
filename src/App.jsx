import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoItem from './components/TodoItem'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: [
        {
          task: 'Giặt đồ',
          isCompleted: true
        },
        {
          task: 'Nấu cơm',
          isCompleted: true
        },
        {
          task: 'Đi chợ',
          isCompleted: false
        }
      ]
    }

    this.addNewItem = this.addNewItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
  }

  onClickItem(item) {
    const { todos } = this.state
    const index = todos.indexOf(item)
    this.setState({
      todos: todos.map((todo, todoIndex) => {
        if (index === todoIndex) todo.isCompleted = !todo.isCompleted
        return todo
      })
    })
  }

  addNewItem(event) {
    let text = event.target.value
    if (event.keyCode === 13) {
      if (!text || !text.trim()) {
        event.target.value = ''
        return
      }
      this.setState({
        todos: this.state.todos.concat({ task: text, isCompleted: false })
      })
      event.target.value = ''
    }
  }

  deleteItem(item) {
    console.log(item)
    const { todos } = this.state
    const index = todos.indexOf(item)
    if (window.confirm('Do you want to delete ?')) {
      this.setState({
        todos: [...todos.slice(0, index), ...todos.slice(index + 1)]
      })
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='input-group mb-3'>
          <input
            type='text'
            className='form-control'
            placeholder='Nhập vào công việc mới'
            onKeyUp={this.addNewItem}
          />
        </div>
        <ul className='list-group'>
          {this.state.todos.map((todo, index) => (
            <TodoItem
              todo={todo}
              key={index}
              onClickItem={() => this.onClickItem(todo)}
              deleteItem={() => this.deleteItem(todo)}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default App
