import React from 'react'

const Nav = () => {
  return (
    <nav className='nav mb-14'>
        <ul className='flex justify-center gap-[2%] opacity-60'>
            <li>
                <a className='p-2' href="#about">About</a>
            </li>
            <li>
                <a className='p-2' href="#projects">Projects</a>
            </li>
            <li>
                <a className='p-2' href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav