import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Link, useLocation} from 'react-router-dom'
import { CATEGORY_ALL } from '../../../constants/constants'
import { Routings } from '../../../Routes/routes'
import {Category} from '../Category/Category'
import { filterFieldSelector, updateFilterField } from '../resumeList/resumesSlice'

export const SideToolbar = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const showCat = location.pathname === Routings.RESUME_LIST
  const selectedKey = useSelector(filterFieldSelector)

  const onChangeCategory = (e) =>{
    dispatch(updateFilterField(e.target.value))
  }

  return (
    <div>
        <div>
            <Link to={Routings.INDEX}>Start Page</Link> 
        </div>
        
        <div>
            <Link to={Routings.ACCAUNT}>My Account</Link> 
        </div>
        
        <div>
            <Link to={Routings.RESUME_LIST}>My Resumes</Link> 
        </div>
        
        {
          showCat?
          <div className='my-3 px-5 py-5 shadow-md rounded-xl'>
            <p className='my-2 '>Filter by category</p>
            <Category onChangeCategory={onChangeCategory} defaultKey={CATEGORY_ALL} selectedKey={selectedKey}/>
          </div>
          :''
        }
    </div>
  )
}
