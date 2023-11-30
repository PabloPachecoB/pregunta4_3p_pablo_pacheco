import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './view/home/Home';
import Dashboard from './view/dashboard/Dashboard';
import About from './view/about/About';

import Header from './componentes/header/Header';


import './App.css'

function App() {


  return (
    <>
      <div>

      <BrowserRouter>
            <Header/>


            <Routes>
              <Route path="/"/>
              <Route path="/aboute"element={<About/>} />

              <Route path="/home"element={<Home/>} />
              <Route path="/dashboard"element={<Dashboard/>} />

            </Routes>

      
            </BrowserRouter>
        

      </div>
     
     
    </>
  )
}

export default App
