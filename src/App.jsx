import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Register from './pages/Register.jsx'
import Submit from './pages/Submit';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Routes>
        <Route path="/"  element={<Home />} /> 
        <Route path="/Register"  element={<Register/>} /> 
        <Route path="/Submit"  element={<Submit/>} /> 
      </Routes>
    </>
  )
}

export default App
