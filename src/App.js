
import './App.css';


import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route, Router} from "react-router-dom";


import Header from './Component/Header/header';
import About from './Component/About/About';
import Skill from './Component/Skill/Skill';
import Error from './Component/Error/Error';
import Contact from './Component/Contact/Contact';
import Slide from './Component/Introduce/introduce';
import Home from './Component/Home/Home';
import Loader from './Component/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    const timming = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timming);
  }, [])

  return (
    <div className="App">

      {loading && <Loader /> }
      {
        !loading && 
        <BrowserRouter>
        <Routes>
          <Route expath path="/" element={<Home />}>
            {/* <Route index element={<Slide />} /> */}
          </Route>
          <Route path="about" element={<About />} />
          <Route path="skill" element={<Skill />} />
          <Route path="project" element={<Error />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </BrowserRouter>
      }
      
    </div>
  );
}

export default App;
