import React from 'react'
import { Link } from 'react-router-dom'
import {Category} from './Category'

export const SideToolbar = () => {
  return (
    <div>
        <div>
            <Link to="accaunt">My Account</Link> 
        </div>
        <div>
            <Link to="resumeList">My Resumes</Link> 
        </div>
        <Category/>
    </div>
  )
}
