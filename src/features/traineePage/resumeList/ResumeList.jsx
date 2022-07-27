import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CATEGORY_ALL } from '../../../constants/constants'
import { Routings } from '../../../Routes/routes'
import { filterFieldSelector, resumesSelector } from './resumesSlice'

export const ResumeList = () => {
    const navigate = useNavigate()
    const resumes = useSelector(resumesSelector)
    const filterField = useSelector(filterFieldSelector)

    const filteredResumes = useMemo(()=>{
        if(filterField !== CATEGORY_ALL){
            return resumes.filter(resume=>{
               return resume.Category_ID === filterField
            })
        } else{
            return resumes
        }
    },[filterField,resumes])

    const onClickCell = (resumeId) => {
        navigate(`${Routings.RESUME}/${resumeId}`, { replace: true })
    }

    const onClickAddResume = ()=>{
        navigate(Routings.ADD_RESUME)
    }

    const renderedResumes = filteredResumes.map(resume => {
        return (
            <tr  key={resume.ID} className='border-b divide-sky-500 hover:bg-indigo-50' onClick={() => onClickCell(resume.ID)}>
                <td className='px-5'>{resume.Surname}</td>
                <td className='px-5'>{resume.Name}</td>
                <td className='px-5'>{resume.Category_ID}</td>
            </tr>
        )
    })


    return (
        <div className='flex flex-col'>
            <div>
                <div className='float-right px-2 rounded hover:bg-indigo-50' onClick={onClickAddResume}>
                    Add resume
                </div>
            </div>
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
