import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { resumesSelector } from './resumesSlice'

export const ResumeList = () => {
    const navigate = useNavigate()
    const resumes = useSelector(resumesSelector)

    const onClickCell = (resumeId)=>{
        navigate(`/trainee/resume/${resumeId}`,{replace:true})
    }

    const renderedResumes = resumes.map(resume=>{
        return(
            <tr className='border-b divide-sky-500 hover:bg-indigo-50' onClick={()=>onClickCell(resume.ID)}>
                <td className='px-5'>{resume.Surname}</td>
                <td className='px-5'>{resume.Name}</td>
                <td className='px-5'>{resume.Category_ID}</td>
            </tr>
        )
    })


    return (
        <div>
            <p className='text-center'>ResumeList</p>
            <table className="table-auto border-collapse">
                <thead>
                    <tr className='border-b divide-sky-500'>
                        <th>Surname</th>
                        <th>Name</th>
                        <th>Category Id</th>
                    </tr>
                </thead>
                <tbody>
                    {renderedResumes}
                </tbody>
            </table>
        </div>
    )
}
