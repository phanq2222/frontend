import React from 'react'

import Todos from './Todos';


function LiftingStateUp() {
  const [todos, setTodos] = React.useState([
    {
      id: 1,
      text: 'Learn React',
      completed: false,
    },
    {
      id: 2,
      text: 'Learn Firebase',
      completed: false,
    }
  ])

  function _handleUpdateTodo(todoId) {
    console.log('_handleUpdateTodo parent', todoId)
    // update  todo: setTodos(xxx)
  }
  
  return (
    <div>
      <Todos todos={todos} _handleUpdateTodo={_handleUpdateTodo} />

    </div>
  )
}

export default LiftingStateUp