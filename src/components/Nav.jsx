import React, { useState, useEffect } from 'react'

const Nav = () => {
    const [stickyTop, setStickyTop] = useState('-2px')
    const [relativeTop, setRelativeTop] = useState(0)
    let currPos = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < currPos) {
                // Scroll up -> show
                setStickyTop('-2px')
            } else {
                // Scroll down -> hide
                setStickyTop('-48px')
            }
            currPos = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll)
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        const handleScroll = () => {
          const navBar = document.querySelector('#nav')
          const navBarTop = navBar.getBoundingClientRect().top
      
          if (navBarTop <= 30) {
            setRelativeTop(0)
          } else {
            setRelativeTop(-20)
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
      }, [])

    return (
        <nav id='nav' className='nav py-2 h-12 z-50 
            bg-gradient-to-b 
            from-zinc-900 from-80%
            to-zinc-900/20
            sticky duration-500'
            style={{ top: stickyTop }} /* doesn't work smoothly as a Tailwind class */
        >
            <ul className='flex justify-center gap-[2%] relative duration-500'
                style={{ top: relativeTop }}
            >
                <li className='text-zinc-400 hover:text-zinc-50'>
                    <a className='p-2' href="#about">About</a>
                </li>
                <li className='text-zinc-400 hover:text-zinc-50'>
                    <a className='p-2' href="#projects">Projects</a>
                </li>
                <li className='text-zinc-400 hover:text-zinc-50'>
                    <a className='p-2' href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav