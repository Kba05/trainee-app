import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../component/input/Input';
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

        <Input labelValue="Surname" typeOfInput="text" nameOfInput="surname" />

        <Input labelValue="Name" typeOfInput="text" nameOfInput="name" />

        <Input labelValue="Date birth" typeOfInput="date" nameOfInput="dateBirth" />

        <Input labelValue="Tel" typeOfInput="tel" nameOfInput="tel" />

        <Input labelValue="Email" typeOfInput="text" nameOfInput="email" />

        <Input labelValue="Skills" typeOfInput="text" nameOfInput="skills" />

        <Input labelValue="Salary" typeOfInput="number" nameOfInput="salary" />

        <label htmlFor="language">Language</label>
        <select className='border border-inherit outline-blue-500 mb-5' name='language' onChange={onChangeLanguage}>
          <option key="default" value="EN"></option>
          {renderedLanguages}
        </select>

        <label htmlFor="category">Category</label>
        <div className='mb-5'>
          <Category onChangeCategory={onChangeAddformCategory}/>
        </div>

        <div className="flex justify-end">
          <button className='border border-inherit hover:bg-indigo-50 disabled:bg-inherit px-3 py-1 rounded' type='submit'>Add Resume</button>
        </div>
      </form>
    </div>
  )
}
