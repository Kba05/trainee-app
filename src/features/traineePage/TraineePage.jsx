import React from 'react'
import { SideToolbar } from './sideBar/SideToolbar'
import { Outlet } from 'react-router-dom'

export const TraineePage = () => {
  return (
    <div className='h-screen'>
      <div className='container'>
        <div className='flex py-3'>
          <aside className='px-5 py-5 w-2/12'>
              <SideToolbar/>
          </aside>
          <main className='bg-white px-5 py-5 w-10/12 rounded-2xl'>
              <Outlet/>
          </main>
        </div>
      </div>
      
    </div>
  )
}