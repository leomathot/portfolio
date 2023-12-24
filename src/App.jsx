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
        <Route exact path='/' component={<PageHome/>}/>
        <Route exact path='/about' component={<PageAbout/>}/>
        <Route exact path='/projects' component={<PageProjects/>}/>
        <Route exact path='/contact' component={<PageContact/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
