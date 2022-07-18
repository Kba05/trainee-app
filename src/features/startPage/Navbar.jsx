import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='flex justify-between py-3'>
        <div className='bg-white rounded-lg font-mono font-semibold text-sky-400 px-3 py-2'>
           <Link to="/">Trainee</Link> 
        </div>
        <div className='flex'>
            <div className='px-2 py-2 mx-2 rounded-xl hover:bg-white font-medium'> <Link to="/auth">Sig in</Link> </div>
            <div className='px-2 py-2 mx-2 rounded-xl hover:bg-white font-medium'> <Link to="/trainee">Get start</Link></div>
        </div>
    </div>
  )
}
