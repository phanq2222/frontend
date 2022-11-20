import React from 'react'
import { Button } from './components/Button';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';

function ConditionRendering() {
  const [todos, setTodos] = React.useState([]);
  const [isAuth, setIsAuth] = React.useState(false);
  let button = <></>;

  function handleToggleAuth() {
    console.log('handleToggleAuth')
    setIsAuth(prevState => {
      return !prevState;
    });
  }

  function renderButton() {
    return <Button name="render function" />
  }

  if(isAuth) {
    button = <LogoutButton onClick={handleToggleAuth} />
  } else {
    button = <LoginButton onClick={handleToggleAuth} />
  }

  function handleAddTodo() {
    const todoItem = {
      id: Date.now(),
      text: 'Learn Angular'
    }
    setTodos(prevState => {
      return [
        ...prevState,
        todoItem
      ]
    })
  }
  

  return (
    <div>
      <h3>Inline If with Logical && Operator: render list item in jsx</h3>
      <Button
        name="Add todo"
        onClick={handleAddTodo}
      />
      {
        todos.length > 0 && (
          <ul>
            {todos.map(todo => {
              // code logic
              return (
                <li>
                  id: {todo.id} <br/>
                  text: {todo.text}
                </li>
              )
            })}
          </ul>
        )
      }

      <h3>Element Variable</h3>
      {button}

      <h3>Render function</h3>
      {renderButton()}

      <h3>multiple class name</h3>
    
    </div>
  )
}

export default ConditionRendering