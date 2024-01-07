import React, { useState, useEffect } from 'react'

const Nav = () => {
    const [stickyTop, setStickyTop] = useState('-2px')
    const [navUpperValues, setNavUpperValue] = useState({
        listRelTop: 0, 
        navBg: 'zinc-900/50'
    })
    let currPos = window.scrollY;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < currPos) {
                // Scroll up -> show
                setStickyTop('-1px')
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
        const zinc900a50 = 'rgb(24,24,27,0.5)'
        const zinc900a98 = 'rgb(24,24,27,0.98)'

        const handleScroll = () => {
          const navBar = document.querySelector('#nav')
          const navBarTop = navBar.getBoundingClientRect().top
      
          if (navBarTop <= 30) {
            setNavUpperValue({
                ...navUpperValues,
                listRelTop: 0, 
                navBg: navBarTop <= 5 ? zinc900a98 : zinc900a50
            })
          } else {
            setNavUpperValue({
                ...navUpperValues,
                listRelTop: -20, 
                navBg: zinc900a50
            })
          }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
      }, [])

    return (
        <nav id='nav' 
            className='nav py-2 h-12 z-50 sticky duration-500'
            style={{ 
                top: stickyTop, 
                background: navUpperValues.navBg
            }} /* doesn't work smoothly as a Tailwind class */
        >
            <ul className='flex justify-center gap-[2%] relative duration-500'
                style={{ top: navUpperValues.listRelTop }}
            >
                <li className='text-zinc-300/90 hover:text-zinc-50'>
                    <a className='p-2' href="#about">About</a>
                </li>
                <li className='text-zinc-300/90 hover:text-zinc-50'>
                    <a className='p-2' href="#projects">Projects</a>
                </li>
                <li className='text-zinc-300/90 hover:text-zinc-50'>
                    <a className='p-2' href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav