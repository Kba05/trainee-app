import React from 'react'
import { Link, useLocation} from 'react-router-dom'
import {Category} from '../Category/Category'

export const SideToolbar = () => {
  const location = useLocation()
  const showCat = location.pathname === "/trainee/resumeList"
  const onChangeCategory = (e) =>{
    console.log(e.target.value)
  }

  return (
    <div>
          <Link to="/">Start Page</Link> 
        <div>
            <Link to="accaunt">My Account</Link> 
        </div>
        <div>
            <Link to="resumeList">My Resumes</Link> 
        </div>
        {showCat?<Category onChangeCategory={onChangeCategory}/>:''}
       
    </div>
  )
}
