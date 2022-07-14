import React, { useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useLocation } from "react-router-dom";
import { fetchAuth } from './authSlice'

export const Auth = () => {
  const dispatch = useDispatch()

  const location = useLocation()
  const nagivate = useNavigate()

  const [logInput, setLogInput] = useState('')
  const [passInput, setPassInput] = useState('')
  const [ableSignUp, setableSignUp ] = useState(true)

  const fromPage = location.state?.from?.pathname || '/trainee/accaunt'

  useMemo(()=>{
    setableSignUp(logInput.length ===0 || passInput.length ===0)
  },[logInput,passInput])

  const onSignUp = () => {
    const token = btoa(logInput + ":" + passInput)
    localStorage.setItem('REACT_TOKEN_AUTH', JSON.stringify(token))
    dispatch(fetchAuth()).then(()=>{
      nagivate(fromPage, {replace:true})
    })
    // console.log(JSON.parse(localStorage.getItem('REACT_TOKEN_AUTH')))
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
            onChange={(e) => setLogInput(e.target.value)} />

          <label htmlFor="password">Password</label>
          <input
            className='border border-indigo-100 outline-blue-500 mb-5'
            type="password"
            name="password"
            value={passInput}
            onChange={(e) => setPassInput(e.target.value)} />

          <button
            className='border bg-blue-500 hover:text-white mb-5 disabled:bg-indigo-50 disabled:text-white '
            onClick={() => onSignUp()}
            disabled={ableSignUp}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}
