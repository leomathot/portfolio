import React from 'react'

const liSty = 'opacity-70 hover:opacity-90 active:opacity-100'

const Nav = () => {
  return (
    <nav className='nav mb-10 bg-[var(--black)]'>
        <ul className='flex justify-center gap-[2%]'>
            <li className={liSty}>
                <a className='p-2' href="#about">About</a>
            </li>
            <li className={liSty}>
                <a className='p-2' href="#projects">Projects</a>
            </li>
            <li className={liSty}>
                <a className='p-2' href="#contact">Contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Nav