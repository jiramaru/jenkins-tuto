import React from 'react'

const Header = () => {
  return (
    <header className='bg-blue-500 text-white p-4 flex items-center justify-center gap-28'>
      <span className=''>Jenkins</span>
      <nav className='ml-4'>
        <a href="#" className='mx-2 hover:underline'>Home</a>
        <a href="#" className='mx-2 hover:underline'>About</a>
        <a href="#" className='mx-2 hover:underline'>Contact</a>
      </nav>
      
    </header>
  )
}

export default Header
