import About from "./pages/About"
import Workes from './pages/Workes'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
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
        </Routes>
        </main>
        <Footer />
      </>
  )
}

export default App
