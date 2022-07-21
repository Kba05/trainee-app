import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useLocation} from 'react-router-dom'
import {Category} from '../Category/Category'
import { filterFieldSelector, updateFilterField } from '../resumeList/resumesSlice'

export const SideToolbar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const showCat = location.pathname === "/trainee/resumeList"
  const selectedKey = useSelector(filterFieldSelector)

  const onChangeCategory = (e) =>{
    dispatch(updateFilterField(e.target.value))
  }

  return (
    <div>
        <div>
            <Link to="/">Start Page</Link> 
        </div>
        
        <div>
            <Link to="accaunt">My Account</Link> 
        </div>
        
        <div>
            <Link to="resumeList">My Resumes</Link> 
        </div>
        
        {
          showCat?
          <div className='my-3 px-5 py-5 shadow-md rounded-xl'>
            <p className='my-2 '>Filter by category</p>
            <Category onChangeCategory={onChangeCategory} defaultKey={'all'} selectedKey={selectedKey}/>
          </div>
          :''
        }
    </div>
  )
}
