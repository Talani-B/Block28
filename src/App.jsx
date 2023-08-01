import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';



function App() {
  
  return (

      <div id="container">
      <div id="navbar">
      </div>
      <div id="main-section">
      <Routes>
      <Route path="/home" element={ <Home/> } />
      <Route path="/blue" element={ <Blue/> } />
      <Route path="/red" element={ <Red/> } />
      <Route path="/home" element={ <Home/> } />
      </Routes> 

   </div>
   </div>
  )
}

export default App
