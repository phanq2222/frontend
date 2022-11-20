import React from 'react'


import TodoList from './TodoList'

function Todos( { todos, _handleUpdateTodo }) {
  return (
    <div>
      {todos.map(todo => {
        return <TodoList todo={todo} _handleUpdateTodo={_handleUpdateTodo} />
      })}
    </div>
  )
}

export default Todos