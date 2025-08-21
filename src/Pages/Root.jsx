import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNav from '../Components/MainNav'

export default function Root() {
  return (
    <div>
        <MainNav />
        <main className='flex h-screen'>
            <Outlet />
        </main>
    </div>
  )
}
