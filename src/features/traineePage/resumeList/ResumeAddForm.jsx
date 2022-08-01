import React, { useEffect, useMemo, useState } from 'react'
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

  const [surnameValue, setSurnameValue] = useState('')
  const [nameValue, setNameValue] = useState('')
  const [dateBirthValue, setDateBirthValue] = useState('')
  const [telValue, setTelValue] = useState('')
  const [emailValue, setEmailValue] = useState('')
  const [skillsValue, setSkillsValue] = useState('')
  const [sallaryValue, setSallaryValue] = useState('')
  const [category, setCategory] = useState(INITIAL_VALUE_ADD_FORM.INITIAL_CATEGORY)
  const [language, setLanguage] = useState(INITIAL_VALUE_ADD_FORM.INITIAL_LANGUAGE)

  useEffect(()=>{
    dispatch(fetchNewId())
  },[dispatch])
  
  const newId = useSelector(newIdSelector)
  const languages = useSelector(languagesSelector)

  const isEmpty = useMemo(()=>{
    if(surnameValue === '' || nameValue === ''||dateBirthValue === ''||telValue === ''||emailValue === ''||skillsValue === ''||sallaryValue === ''){
      return true
    } return false
  },[surnameValue,nameValue,dateBirthValue,telValue,emailValue,skillsValue,sallaryValue])


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

        <Input 
          labelValue="Surname" 
          typeOfInput="text" 
          nameOfInput="surname" 
          onChangeInputValue={setSurnameValue}
          inputValue={surnameValue}/>

        <Input 
          labelValue="Name" 
          typeOfInput="text" 
          nameOfInput="name" 
          onChangeInputValue={setNameValue}
          inputValue={nameValue}/>

        <Input 
          labelValue="Date birth" 
          typeOfInput="date" 
          nameOfInput="dateBirth" 
          onChangeInputValue={setDateBirthValue}
          inputValue={dateBirthValue}/>

        <Input 
          labelValue="Tel" 
          typeOfInput="tel" 
          nameOfInput="tel" 
          onChangeInputValue={setTelValue}
          inputValue={telValue}/>

        <Input 
          labelValue="Email" 
          typeOfInput="text" 
          nameOfInput="email" 
          onChangeInputValue={setEmailValue}
          inputValue={emailValue}/>

        <Input 
          labelValue="Skills" 
          typeOfInput="text" 
          nameOfInput="skills" 
          onChangeInputValue={setSkillsValue}
          inputValue={skillsValue}/>

        <Input 
          labelValue="Salary" 
          typeOfInput="number" 
          nameOfInput="salary" 
          onChangeInputValue={setSallaryValue}
          inputValue={sallaryValue}/>

        <label htmlFor="language">Language</label>
        <select className='border border-indigo-50 outline-blue-500 mb-5' name='language' onChange={onChangeLanguage}>
          <option key="default" value="EN"></option>
          {renderedLanguages}
        </select>

        <label htmlFor="category">Category</label>
        <Category onChangeCategory={onChangeAddformCategory}/>

        <div className="flex justify-end mt-5">
          <button 
            className='px-3 py-1 rounded border border-indigo-50 hover:bg-indigo-50 disabled:bg-inherit ' 
            type='submit'
            disabled={isEmpty}>
              Add Resume
          </button>
        </div>
      </form>
    </div>
  )
}
