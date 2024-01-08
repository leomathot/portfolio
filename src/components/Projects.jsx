import React from 'react'
import ProjectsGrid from './ProjectsGrid'
import ProjectsSwiper from './ProjectsSwiper'

const Projects = () => {

  return (
    <div>

      <section id='projects'
        className='pt-20 pb-10 bg-zinc-900/20'
      >
        <div className='max-width'>
          <h2 className='mb-10 text-lg font-[600] text-cyan-400'>Projects</h2>

          <ProjectsGrid/>

          <ProjectsSwiper/>

        </div>
      </section>
    </div>
  )
}

export default Projects