import React, {Component} from 'react'
import TodoItem from './TodoItem.js'

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props

    return (
      <div>
        <TodoItem text="hello"/>
        <TodoItem text="Hi Hi"/>
        <TodoItem text="this is test"/>
      </div>
    )
  }
}

export default TodoItemList
