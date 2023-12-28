import React from 'react'

const About = () => {
  return (
    <div className='about-desc max-width min-h-[50vh] flex flex-col'>
        <div className='grid md:grid-cols-2 gap-10 max-w-[850px] mx-auto pt-5'>
            <div className='md:text-right'>
                <p>Switched from electrician to programmer. Committed to doing my best, I bring problem-solving skills and meticulous attention to detail.</p>
            </div>
            <div className='md:text-left'>
                <p>Currently studying Computer Programming at Niagara College Canada while constantly seeking to improve my skills from online resources.</p>
            </div>
        </div>
        
        <div className='flex justify-center gap-[7%] my-20 text-cyan-500'>
            <i className="fa-brands fa-html5"></i>
            <i className="fa-brands fa-css3-alt"></i>
            <img className='size-7 text-cyan-500' src="/src/assets/icons/tailwindcss-svgrepo-com.svg" alt="tailwind icon" />
            <i className="fa-brands fa-js"></i>
            <i className="fa-brands fa-react"></i>
            <span className='fw600'>C#</span>
            <span>SQL</span>
        </div>
    </div>
  )
}

export default About