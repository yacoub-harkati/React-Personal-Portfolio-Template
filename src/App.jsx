import About from "./pages/About"
import Workes from './pages/Workes'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import NavBar from './components/NavBar'
import { Route, Routes, Link } from 'react-router-dom'
import { useState } from 'react'
import './styles/App.css'


function App() {
  return (
      <>
        <NavBar />
        <main>
        <Routes>
          <Route path="/" element={<About/>} />
          <Route path="/workes" element={<Workes/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        </main>
        <Footer />
      </>
  )
}

export default App
