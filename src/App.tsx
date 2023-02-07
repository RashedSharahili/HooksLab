import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/Login'
import Home from './Components/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Login/>} />
        <Route path={"/home"} element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
