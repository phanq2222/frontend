import React from 'react'

import { Button } from '../components/Button'

function TodoList( { todo, _handleUpdateTodo }) {
  console.log('TodoList: ', todo)

  function onUpdateTodo() {
    console.log('handleUpdatTodo', todo.id)
    // _handleUpdateTodo(todo.id)
    _handleUpdateTodo(todo.id);
  }
  
  return (
    <div>
      Id: {todo.id} <br />
      Text: {todo.text} <br />
      Completed: {todo.completed ? 'true' : 'false'} <br />
      <Button 
        name="Update todo"
        onClick={onUpdateTodo}
      />
    </div>
  )
}

export default TodoList