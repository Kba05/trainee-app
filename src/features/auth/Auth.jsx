import React from 'react'

export const Auth = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
        <div className='bg-white rounded-2xl h-72 flex justify-center items-center'>
            <div className='flex flex-col px-20'>
                <label htmlFor="login">Login</label>
                <input className='border border-indigo-100 outline-blue-500 mb-5' type="text" name="login"/>

                <label htmlFor="password">Password</label>
                <input className='border border-indigo-100 outline-blue-500 mb-5' type="password" name="password"/>
                <button className='border border-indigo-100 hover:bg-blue-500 hover:text-white mb-5'>
                    Sign up
                </button>
            </div>
            
        </div>
    </div>
  )
}
