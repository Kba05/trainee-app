import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom"
import { fetchAuth } from './authSlice'
import { fetchCategories } from '../traineePage/Category/categoriesSlice'
import { fetchResumes, fetchLanguages } from '../traineePage/resumeList/resumesSlice'
import { Routings } from '../../Routes/routes'
import { AUTH_TOKEN_KEY } from '../../constants/constants'

export const Auth = () => {
  const dispatch = useDispatch()

  const location = useLocation()

  const nagivate = useNavigate()

  const [logInput, setLogInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [ableSignUp, setableSignUp ] = useState(true)

  const fromPage = location.state?.from?.pathname || Routings.ACCAUNT

  useMemo(()=>{
    setableSignUp(logInput.length === 0 || passInput.length === 0)
  },[logInput,passInput])

  const onSignUp = () => {
    const token = window.btoa(logInput + ":" + passInput)
    localStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(token))
    Promise.all([
      dispatch(fetchAuth()),
      dispatch(fetchCategories()),
      dispatch(fetchResumes()),
      dispatch(fetchLanguages())
    ]).then(()=>{
      return nagivate(fromPage, {replace:true})
    })
  }

  const OnChangeLoginInput = (e) =>{
    setLogInput(e.target.value)
  }

  const onChangePasswordInput = (e) =>{
    setPassInput(e.target.value)
  }

  return (
    <div className='h-screen flex justify-center items-center'>
      <div className='bg-white rounded-2xl h-72 flex justify-center items-center'>
        <div className='flex flex-col px-20'>
          <label htmlFor="login">Login</label>
          <input
            className='border border-indigo-100 outline-blue-500 mb-5'
            type="text"
            name="login"
            value={logInput}
            onChange={OnChangeLoginInput} />

          <label htmlFor="password">Password</label>
          <input
            className='border border-indigo-100 outline-blue-500 mb-5'
            type="password"
            name="password"
            value={passInput}
            onChange={onChangePasswordInput} />

          <button
            className='border bg-blue-500 hover:text-white mb-5 disabled:bg-indigo-50 disabled:text-white'
            onClick={onSignUp}
            disabled={ableSignUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
