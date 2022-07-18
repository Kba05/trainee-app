import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { Category } from '../Category/Category';
import { fetchAddResume, fetchNewId, newIdSelector} from './resumesSlice';

export const ResumeAddForm = () => {
  const dispatch  = useDispatch()
  const [category, setCategory] = useState()

  useEffect(()=>{
    dispatch(fetchNewId())
  },[])
  
  const newId = useSelector(newIdSelector)

  const onAddResume = (e)=>{
    e.preventDefault();
    const form = e.target;
    const newResume = {
      ID : newId,
      Surname : form.surname.value,
      Name : form.name.value,
      Datebirth : form.dateBirth.value,
      Telnum : form.tel.value,
      Email : form.email.value,
      Salary: Number(form.salary.value), 
      Category: {ID:category}, 
      Language:{ID:"FR"} 
    }
    dispatch(fetchAddResume(newResume))
  }

  const onChangeAddformCategory = (e)=>{
    setCategory(e.target.value)
  }

  return (
    <div>
      ResumeAddForm
      <form className='flex flex-col' onSubmit={onAddResume}>
        <label htmlFor="surname">Surname</label>
        <input type="text" name='surname' />

        <label htmlFor="name">Name</label>
        <input type="text" name="name"/>

        <label htmlFor="dateBirth"> Date birth</label>
        <input type="date" name="dateBirth"/>

        <label htmlFor="tel">Tel</label>
        <input type="tel" name="tel"/>

        <label htmlFor="email">Email</label>
        <input type="text" name='email' />

        <label htmlFor="language">Language</label>
        <input type="text" name="language"/>

        <label htmlFor="skills">Skills</label>
        <input type="text" name="skills"/>

        <label htmlFor="salary">Salary</label>
        <input type="number" name="salary"/>

        <Category onChangeCategory={onChangeAddformCategory}/>

        <button type='submit'>Add Resume</button>
      </form>
    </div>
  )
}
