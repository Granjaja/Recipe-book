import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div className='flex justify-between m-5 bg-transparent h-30 items-center'>
        <div className='flex rounded-full bg-slate-50 items-center justify-items-center'>
        <h1  className='font-semibold text-2xl p-1 text-orange-500'>My <span className='font-meaCulpa text-purple-500'>Recipe Book</span></h1>
        </div>
        <div className='items-center'>
        <Navbar/>
        </div>
        
      
    </div>
  )
}

export default Header
