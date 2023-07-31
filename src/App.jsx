import { useState } from 'react'
import { Routes, Route , Link} from "react-router-dom";
import './App.css'
import Red from './components/Red';
import Blue from './components/Blue';
import Home from './components/Home';



function App() {
  
  return (

      <div id="container">
      <div id="navbar">
       <li>
        <Link to="/blue">Blue</Link>
        </li>
        <li>
         <Link to="/red">Red</Link>
         </li>
        <li>
        <Link to="/home">Home</Link>
       </li>
      </div>
      <div id="main-section">
      <Routes>
      <Route path="/blue" element={ <Blue/> } />
      <Route path="/red" element={ <Red/> } />
      <Route path="home" element={ <Home/> } />
      </Routes> 

   </div>
   </div>
  )
}

export default App
