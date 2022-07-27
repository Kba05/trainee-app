import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../auth/authSlice'

export const Accaunt = () => {
  
  const user = useSelector(selectUser);

  return (
    <div>
        <p className='text-center'>Account</p> 
        <p>Username : {user}</p>
    </div>
  )
}
