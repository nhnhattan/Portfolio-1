
// import './App.css';


import React, {useState, useEffect} from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";


import Header from '../Header/header';
import About from '../About/About';
import Skill from '../Skill/Skill';
import Error from '../Error/Error';
import Contact from '../Contact/Contact';
import Slide from '../Introduce/introduce';
import Loader from '../Loader/Loader';

function Home() {
  const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        const timming = setTimeout(() => {
        setLoading(false);
        }, 1000);
        return () => clearTimeout(timming);
    }, [])

  return (
    <>
        {loading && <Loader /> }
        {
        !loading &&
        <div className="App">
          <Header />
          <Slide />
        </div>
        }
    </>
  );
}

export default Home;
