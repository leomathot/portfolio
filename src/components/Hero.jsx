import React from 'react'

const Hero = () => {
  return (
    <section id="about" className='hero min-h-[50vh] flex justify-center align-bottom items-center'>
      <div class="bg-bottom"></div>
      <div class="bg-move-1"></div>
      <div class="bg-move-2"></div>
      <div class="bg-top"></div>
        <div>
            <h1 className="text-2xl text-cyan-400 mb-2.5"><i class="fa-solid fa-chevron-right" /> <span>Leo</span>nardo Mathot</h1>
            <h2>Front End Devoloper</h2>
        </div>
    </section>
  )
}

export default Hero