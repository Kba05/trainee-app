import React from 'react'
import { Link } from 'react-router-dom'
import { Routings } from '../../Routes/routes'

export const Navbar = () => {
  return (
    <div className='flex justify-between py-3'>
        <div className='bg-white rounded-lg font-mono font-semibold text-sky-400 px-3 py-2'>
           <Link to={Routings.INDEX}>Trainee</Link> 
        </div>
        <div className='flex'>
            <div className='px-2 py-2 mx-2 rounded-xl hover:bg-white font-medium'> <Link to={Routings.AUTH}>Sig in</Link> </div>
            <div className='px-2 py-2 mx-2 rounded-xl hover:bg-white font-medium'> <Link to={Routings.TRAINEE_PAGE}>Get start</Link></div>
        </div>
    </div>
  )
}
