import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
          <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 bg-center bg-cover bg-no-repeat p-[15px]' style={{ backgroundImage: 'url(assets/img/bg.jpg)' }}>
            <Outlet />
        </div>
    </>
  )
}
