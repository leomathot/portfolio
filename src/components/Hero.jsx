import React from 'react'

const Hero = () => {
  return (
    <section id="about" className='hero min-h-[50vh] flex justify-center align-bottom items-center'>
      <div className="bg-bottom"></div>
      <div className="bg-move-1"></div>
      <div className="bg-move-2"></div>
      <div className="bg-top"></div>
      <article>

            <h1 className="text-2xl text-cyan-400 ml-[-28px] mb-2.5"><i class="fa-solid fa-chevron-right" /> <span>Leo</span>nardo Mathot</h1>

            <h2 className='mb-4'>Front End Devoloper</h2>

            <div className='text-cyan-400 flex gap-4'>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
              <i className="fa-solid fa-envelope"></i>
            </div>

        </article>
    </section>
  )
}

export default Hero