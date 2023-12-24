import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import PageHome from './components/PageHome'
import PageAbout from './components/PageAbout'
import PageProjects from './components/PageProjects'
import PageContact from './components/PageContact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <Hero/>

      <div>
        <NavBar />
        <Routes>
          <Route path='/' element={<PageHome/>}/>
          <Route path='/about' element={<PageAbout/>}/>
          <Route path='/projects' element={<PageProjects/>}/>
          <Route path='/contact' element={<PageContact/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
