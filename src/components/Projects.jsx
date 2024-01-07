import React from 'react'
import Box from './Box'

const Projects = () => {

  return (
    <div>

      <section id='projects'
        className='pt-20 pb-10 bg-zinc-900/20'
      >
        <div className='max-width'>
          <h2 className='mb-10 text-lg font-[600] text-cyan-400'>Projects</h2>
          <div className='py-1 mx-auto
          grid  gap-10 w-[80%]
          sm:grid-cols-2 sm:gap-x-6 sm:w-full
          md:grid-cols-3'
          >
            <Box title='Project 01' color='1' />
            <Box title='Project 02' color='2' />
            <Box title='Project 03' color='3' />
            <Box title='Project 04' color='1' />
            <Box title='Project 05' color='2' />
            <Box title='Project 06' color='3' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Projects