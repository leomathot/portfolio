import React from 'react'
import RouterNavBar from './RouterNavBar'
import ProjWeb from './ProjWeb'
import ProjGames from './ProjGames'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const Projects = () => {
  return (
    <section className='max-width sect'>
    <BrowserRouter>
        <h2>Projects</h2>
        <RouterNavBar />
        <Routes>
          <Route path='/' element={<ProjWeb/>}/>
          <Route path='/2' element={<ProjGames/>}/>
        </Routes>
    </BrowserRouter>
    </section>
  )
}

export default Projects