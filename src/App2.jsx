import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import TodoItem2 from './components/TodoItem2'

class App2 extends Component {
  constructor() {
    super()

    this.state = {
      todos2: [
        {
          task: 'Ăn cơm',
          isCompleted: true
        },
        {
          task: 'Đi ngủ',
          isCompleted: false
        }
      ]
    }
    this.onClickItem2 = this.onClickItem2.bind(this)
    this.addNewItem2 = this.addNewItem2.bind(this)
  }

  onClickItem2(item) {
    const { todos2 } = this.state
    const index = todos2.indexOf(item)

    this.setState({
      todos2: [
        ...todos2.slice(0, index),
        { ...item, isCompleted: !item.isCompleted },
        ...todos2.slice(index + 1)
      ]
    })
  }

  addNewItem2(e) {
    let text = e.target.value
    if (e.keyCode === 13) {
      if (!text || !text.trim()) {
        e.target.value = ''
        return
      }
      this.setState({
        todos2: [...this.state.todos2, { task: text, isCompleted: false }]
      })
      e.target.value = ''
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
            onKeyUp={this.addNewItem2}
          />
        </div>
        <ul className='list-group'>
          {this.state.todos2.map((todo, index) => (
            <TodoItem2 todo={todo} key={index} onClickItem2={this.onClickItem2} />
          ))}
        </ul>
      </div>
    )
  }
}

export default App2
