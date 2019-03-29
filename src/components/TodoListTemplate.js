import React from 'react'
import './TodoListTemplate.css'

const TodoListTemplate = ({form, children}) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        오늘 할 일
      </div>
      <section className="form-wrapper">
        {form}
      </section>
      <sectionn className="todos-wrapper">
        {children}
      </sectionn>
    </main>
  )
}

export default TodoListTemplate
