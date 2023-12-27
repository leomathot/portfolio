import React from 'react'

const About = () => {
  return (
    <div className='about-desc max-width min-h-[50vh] flex flex-col'>
        <div className='one-two text-wrap pt-5'>
            <div>
                <p>Switched from electrician to programmer. Committed to doing my best, I bring problem-solving skills and meticulous attention to detail.</p>
            </div>
            <div>
                <p>Currently studying Computer Programming at Niagara College Canada while constantly seeking to improve my skills from online resources.</p>
            </div>
        </div>
        
        <div className='flex justify-center gap-[7%] my-20'>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-react"></i>
            <span className='b600'>C#</span>
            <span>SQL</span>
        </div>
    </div>
  )
}

export default About