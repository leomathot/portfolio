import { useState } from 'react'
import './App.css'
import Hero from './components/Hero'
import RouterNavBar from './components/RouterNavBar'
import PageHome from './components/PageHome'
import PageAbout from './components/PageAbout'
import PageProjects from './components/PageProjects'
import PageContact from './components/PageContact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './components/About'

function App() {

  return (
    <BrowserRouter>

      <Hero/>
      <About/>
      <div>
        <RouterNavBar />
        <Routes>
          <Route path='/page01' element={<PageHome/>}/>
          <Route path='/page02' element={<PageAbout/>}/>
          <Route path='/page03' element={<PageProjects/>}/>
          <Route path='/page04' element={<PageContact/>}/>
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
