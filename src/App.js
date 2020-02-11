import React from 'react';

import './App.css';
import Navbar from './navbar';
import { BrowserRouter } from "react-router-dom";
import Routes from "./rotas";

import Footer from "./Footer";



function App() {
  return (
    <div className="App">
      

      <BrowserRouter>
      
      <Navbar/>
      <Routes/>
      <Footer/>
     
      </BrowserRouter>
     
     
    </div>
  );
}

export default App;
