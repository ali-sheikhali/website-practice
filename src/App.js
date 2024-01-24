import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
function App() {
  return (
    <div >
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' exact Component={Home} />
                <Route path='/about-me' Component={AboutMe} />
            </Routes>
        </Router>
    </div>
  )
}

export default App