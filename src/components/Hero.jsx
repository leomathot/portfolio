import React from 'react'

const Hero = () => {
  return (
    <section id='about' className='hero min-h-[60vh] flex justify-center align-bottom items-center'>
      <div className='bg-bottom'></div>
      <div className='bg-move-1'></div>
      <div className='bg-move-2'></div>
      <div className='bg-top'></div>
      <article>

            <h1 className='text-2xl text-cyan-400 ml-[-28px] mb-2.5'>
              <i class='fa-solid fa-chevron-right text-neutral-50 duration-200' /> <span className='duration-200'>Leo</span>nardo Mathot
            </h1>

            <h2 className='text-neutral-300 mb-4'>Front End Devoloper</h2>

            <div className='text-neutral-300 flex gap-4'>
              <a href='https://www.linkedin.com/in/leonardo-m-180a90208/' target='_blank'>
                <i className='fa-brands fa-linkedin hover:text-cyan-400'></i>
              </a>
              <a href='https://github.com/leomathot' target='_blank'>
                <i className='fa-brands fa-github hover:text-cyan-400'></i>
              </a>
              <a href='#contact'>
                <i className='fa-solid fa-envelope hover:text-cyan-400'></i>
              </a>
            </div>

        </article>
    </section>
  )
}

export default Hero