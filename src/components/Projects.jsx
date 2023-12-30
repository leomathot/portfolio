import React from 'react'
import Box from './Box'

const Projects = () => {
  return (
    <div>
      <div className='w-full h-20 
        bg-gradient-to-b 
        from-[var(--black)] from-20% 
        via-[rgba(0,0,0,0.3)]
        to-[rgba(0,0,0,0.1)]'>
      </div>
    <section id='projects' 
      className='py-10 bg-[rgba(0,0,0,0.1)]'
    >  
      <div className='max-width'>
        <h2 className='mb-10'>Projects</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 py-1'>
          <Box title='Project 01' color='1'/>
          <Box title='Project 02' color='2'/>
          <Box title='Project 03' color='3'/>
          <Box title='Project 04' color='1'/>
          <Box title='Project 05' color='2'/>
          <Box title='Project 06' color='3'/>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Projects