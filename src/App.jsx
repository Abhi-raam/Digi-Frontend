import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import LoginPage from './Components/LoginPage'
import Home from './Components/Home'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App