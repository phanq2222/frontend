import React from 'react'
import { Button } from './Button'


import styles from './loginbutton.module.css'

function LoginButton({ onClick }) {
  return (
    <p>
      <Button 
        name="Login"
        onClick={onClick}
      />
      <span className={styles.text}>login button</span>
    </p>
   
  )
}

export default LoginButton