import React from 'react'
import { useParams } from "react-router-dom"
import { fetchChangeOwner, fetchResumes, resumesSelector } from '../resumeList/resumesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CategoriesSelector } from '../Category/categoriesSlice'
import { selectUser } from '../../auth/authSlice'
 
export const Resume = () => {
  const dispatch = useDispatch()
  const params  = useParams()

  const id = Number(params.Id)

  const resumes = useSelector(resumesSelector)
  const categories = useSelector(CategoriesSelector)
  const user = useSelector(selectUser)

  const exactResume = resumes.find(resume=> resume.ID === id )
  const exactCategory = categories.find( category=> category.ID === exactResume.Category_ID ) 

  const onClickRecruit = ()=>{
    const ownerObj ={
      ID:exactResume.ID,
      Owner:user
    }
    dispatch(fetchChangeOwner(ownerObj)).then(()=>{
      dispatch(fetchResumes())
    })
  }

  return (
    <div>
        <button 
          disabled={exactResume.Status ==="C"} 
          className="border bg-blue-500 hover:text-white mb-5 disabled:bg-indigo-50 disabled:text-white" 
          onClick={onClickRecruit}>
            recruit
        </button>

        <p className='text-center' >Resume</p>
        <p>ID: {exactResume.ID}</p>
        <p>Name: {exactResume.Surname}</p>
        <p>Surname: {exactResume.Name}</p>
        <p>Category: {exactCategory.Text}</p>
        <div>
          <input type="text"/>
          <button>
            send
          </button>
        </div>
    </div>
  )
}
