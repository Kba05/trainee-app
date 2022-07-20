import React from 'react'
import { useParams } from "react-router-dom"
import { resumesSelector } from '../resumeList/resumesSlice'
import { useSelector } from 'react-redux'
import { CategoriesSelector } from '../Category/categoriesSlice'
 
export const Resume = () => {
  const params  = useParams()
  const id = Number(params.Id)
  const resumes = useSelector(resumesSelector)
  const categories = useSelector(CategoriesSelector)
  const exactResume = resumes.find(resume=> resume.ID === id )
  const exactCategory = categories.find( category=> category.ID === exactResume.Category_ID ) 

  return (
    <div>
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
