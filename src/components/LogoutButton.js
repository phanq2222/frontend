import React from 'react'
import { Button } from './Button'

function LogoutButton( { onClick }) {
  return (
    <Button 
      name="Logout"
      onClick={onClick}
    />
  )
}

export default LogoutButton