import React, { useState} from 'react'
import { Button } from './components/Button'

function State() {
  const [name, setName] = useState('truong')
  const [age, setAge] = useState(30);
  const [messageObj, setMessageObj] = useState({
    message: '',
    author: 'truong',
    todo: {
      id: 1,
      text: ''
    }
  }) // memory A

  console.log('render state component', messageObj)

  function onSubmit(e) {
    e.preventDefault();
    console.log('onSubmit')
  }

  // curry function sum(1)(2)
  // function handleTypeButton(value) {
  //   return function() {
  //     console.log("handleTypeButton: ", value)
  //   }
  // }

  const handleTypeButton = value => () => {
    console.log("handleTypeButton: ", value)
  }

  return (
    <div>
      Name: {name} <br />
      Age: {age} <br />
      <Button 
        name="age" 
        onClick={() => {
          setAge(age + 1);
          console.log("submit age")
        }}
      />
      <br />
      <h5>Updating Object</h5>
      <input 
        type="text" 
        value={messageObj.message}
        onChange={(event) => {
          // messageObj.message = event.target.value; // doesn't work // memory A
          const val =event.target.value;
          // const messageObjItem = { 
          //   message: val
          // } // memory B
          setMessageObj(prevState => {
            return {
              ...prevState, // copy all properties of object
              message: val
            }
          });
        }}
      />

      <br /><br />

      <form onSubmit={onSubmit}>
        input, file, select ....

        <button type="submit">type submit</button>
        <button 
          type="button" 
          onClick={handleTypeButton(10)}
        >
          type button
        </button>
      </form>
    </div>
  )
}

export default State


