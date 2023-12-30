import React, { useState, useEffect } from 'react'

const liSty = 'opacity-70 hover:opacity-90 focus:opacity-100'

const Nav = () => {
    const [stickyTop, setStickyTop] = useState('-2px')
    let currPos = window.scrollY;
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY < currPos) {
            // Scroll up -> show
            setStickyTop('-2px');
          } else {
            // Scroll down -> hide
            setStickyTop('-40px');
          }
          currPos = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);
        // Cleanup function to remove the event listener
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
        <nav 
            className='nav py-2 mb-10 bg-[var(--black)] z-10' 
            style={{ position: 'sticky', top: stickyTop, transition: '0.6s' }}
        >

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