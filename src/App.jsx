import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home />}/>  
        <Route path='/home' element={<Home />}/>
         <Route path='/about' element={<Home />}/>
        <Route path='/skills' element={<Home />}/>
        <Route path='/projects' element={<Home />}/>
        <Route path='/education' element={<Home />}/>
        <Route path='/contact' element={<Home />}/>
       </Routes>
        <Footer />
    </div>
  )
}

export default App