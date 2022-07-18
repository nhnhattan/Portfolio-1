
// import './App.css';


import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";


import Header from '../Header/header';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Error from '../Error/Error';
import Contact from '../Contact/Contact';
import Slide from '../Introduce/introduce';

function Home() {
  return (
    <div className="App">
      <Header />
      <Slide />
    </div>
  );
}

export default Home;
