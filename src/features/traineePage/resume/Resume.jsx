import React from 'react'
import { useParams } from "react-router-dom"
import { resumesSelector } from '../resumeList/resumesSlice'
import { useSelector } from 'react-redux'
 
export const Resume = () => {
  const params  = useParams()
  const id = Number(params.Id)
  const resumes = useSelector(resumesSelector)
  const exactResume = resumes.filter((resume)=> resume.ID === id )

  return (
    <div>
        <p className='text-center' >Resume</p>
        <p>ID: {exactResume[0].ID}</p>
        <p>Name: {exactResume[0].Surname}</p>
        <p>Surname: {exactResume[0].Name}</p>
        <p>Category: {exactResume[0].Category_ID}</p>
        <div>
          <input type="text"/>
          <button>
            send
          </button>
        </div>
    </div>
  )
}
