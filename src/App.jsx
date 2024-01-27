import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/user' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App