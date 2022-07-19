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
  const exactResume = resumes.filter((resume)=> resume.ID === id )
  const exactCategory = categories.reduce((cur,category)=>{
    let cat 
    if(category.ID === exactResume[0].Category_ID){
        cat = category.Text
    }
    return cat
  },{}) 

  return (
    <div>
        <p className='text-center' >Resume</p>
        <p>ID: {exactResume[0].ID}</p>
        <p>Name: {exactResume[0].Surname}</p>
        <p>Surname: {exactResume[0].Name}</p>
        <p>Category: {exactCategory}</p>
        <div>
          <input type="text"/>
          <button>
            send
          </button>
        </div>
    </div>
  )
}
