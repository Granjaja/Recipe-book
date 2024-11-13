import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    const links = [
        {name:"/", path:"Home"},
        {name:"/recipes", path:"Recipes"},
        {name:"/contacts", path:"Contact Us"},
        {name:"/createrecipe", path:"Create Recipe"}
    ]
  return (
    <div className='flex gap-7 items-center'>
        {links.map((link, index) => {
            return <Link href={link.name} key={index} className='hover:text-green-500 font-semibold'>
                {link.path}
            </Link>
        })}
        
      
    </div>
  )
}

export default Navbar
