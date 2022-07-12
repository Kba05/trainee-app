import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between py-3'>
        <a className='bg-white rounded-lg font-mono font-semibold text-sky-400 px-3 py-2' href="/">
            Trainee
        </a>
        <div className=''>
            <button className='px-2 py-2 mx-2 rounded-xl hover:bg-white font-medium'>Sign in</button>
            <button className='px-2 py-2 mx-2 rounded-xl hover:bg-white font-medium'>Get start</button>
        </div>
    </div>
  )
}
