import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import PageHome from './components/PageHome'
import PageAbout from './components/PageAbout'
import PageProjects from './components/PageProjects'
import PageContact from './components/PageContact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path='/' element={<PageHome/>}/>
        <Route path='/about' element={<PageAbout/>}/>
        <Route path='/projects' element={<PageProjects/>}/>
        <Route path='/contact' element={<PageContact/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
