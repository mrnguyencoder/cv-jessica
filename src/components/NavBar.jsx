import React from 'react'

function NavBar() {
  return (
    <nav className="flex justify-between p-4 bg-slate-800 text-slate-50">
        <a href="#" className="">Jessica-Shon MASTEL</a>
        <div className='flex space-x-3 pr-4'>
            <a href="#home" className="">Home</a>
            <a href="#cv" className="">CV</a>
        </div>
    </nav>
  )
}

export default NavBar