import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { INITIAL_VALUE_ADD_FORM } from '../../../constants/constants';
import { Routings } from '../../../Routes/routes';
import { Category } from '../Category/Category';
import { fetchAddResume, fetchNewId, newIdSelector,languagesSelector} from './resumesSlice';

export const ResumeAddForm = () => {

  const dispatch  = useDispatch()

  const navigate = useNavigate()

  const [category, setCategory] = useState(INITIAL_VALUE_ADD_FORM.INITIAL_CATEGORY)
  const [language, setLanguage] = useState(INITIAL_VALUE_ADD_FORM.INITIAL_LANGUAGE)

  useEffect(()=>{
    dispatch(fetchNewId())
  },[dispatch])
  
  const newId = useSelector(newIdSelector)
  const languages = useSelector(languagesSelector)

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
      Language: {ID:language} 
    }
    dispatch(fetchAddResume(newResume)).then(()=>{
      navigate(Routings.RESUME_LIST)
    })
  }

  const onChangeAddformCategory = (e)=>{
    setCategory(e.target.value)
  }

  const onChangeLanguage = (e) =>{
    setLanguage(e.target.value)
  }

  const renderedLanguages = languages.map(language=>{
    return <option key={language.ID} value={language.ID}>{language.Text}</option>
  })

  return (
    <div>
      ResumeAddForm
      <form className='flex flex-col outline-blue-500' onSubmit={onAddResume}>
        <label htmlFor="surname">Surname</label>
        <input className='outline-blue-500' type="text" name='surname' />

        <label htmlFor="name">Name</label>
        <input className='outline-blue-500' type="text" name="name"/>

        <label htmlFor="dateBirth"> Date birth</label>
        <input className='outline-blue-500' type="date" name="dateBirth"/>

        <label htmlFor="tel">Tel</label>
        <input  className='outline-blue-500' type="tel" name="tel"/>

        <label htmlFor="email">Email</label>
        <input className='outline-blue-500' type="text" name='email' />

        <label htmlFor="language">Language</label>
        <select className='outline-blue-500' name='language' onChange={onChangeLanguage}>
          <option key="default" value="EN"></option>
          {renderedLanguages}
        </select>

        <label htmlFor="skills">Skills</label>
        <input className='outline-blue-500' type="text" name="skills"/>

        <label htmlFor="salary">Salary</label>
        <input className='outline-blue-500' type="number" name="salary"/>

        <label htmlFor="category">Category</label>
        <Category onChangeCategory={onChangeAddformCategory}/>

        <button type='submit'>Add Resume</button>
      </form>
    </div>
  )
}
