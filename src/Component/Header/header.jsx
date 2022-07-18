import React, { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom'
import About from '../About/About';
import './header.css';
import { BiMenu } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";


function Header() {

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 30) {
            setColor(true)
        } else {
            setColor(false)
        } 
    }

    window.addEventListener('scroll', changeColor)

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    
    const [toggleMenu,setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)
    const toggleNav = () => setToggleMenu(!toggleMenu)

    useEffect(() =>{
        const changeWidth = () => {
            setScreenWidth(window.innerWidth)
        }

        window.addEventListener('resize', changeWidth)
        
        return () => {
            window.removeEventListener('resize', changeWidth)
        }
    }, [])
    
    return (
        <header className={color ? "header header-bg" : "header"}>
            <div className="icon-logo">
                <a href="/"><img className="logo" src={require ('../../asset/img/Logo/Logo.png')} alt="" /></a>
                <div className='icon-open' onClick={handleClick}>
                    <i className="Menu-icon" ><BiMenu onClick={toggleNav} /> </i>
                </div>
            </div>
            {(toggleMenu || screenWidth > 739) && <nav className="navbar">
                <ul>
                    <Link to="/" className="navbar-item">
                        <a className={color ? "navbar-link navbar-link-bg" : "navbar-link"}>Home</a>
                    </Link>
                    <Link to="/about" className="navbar-item">
                        <a className={color ? "navbar-link navbar-link-bg" : "navbar-link"}>About</a>
                    </Link>
                    <Link to="/skill" className="navbar-item">
                        <a className={color ? "navbar-link navbar-link-bg" : "navbar-link"}>Skill</a>
                    </Link>
                    <Link to="/project" className="navbar-item">
                        <a className={color ? "navbar-link navbar-link-bg" : "navbar-link"}>Project</a>
                    </Link>
                    <Link to="/contact" className="navbar-item">
                        <a className={color ? "navbar-link navbar-link-bg" : "navbar-link"}>Contact</a>
                    </Link>
                    
                </ul>
                
            </nav>}
            
            <Outlet />
        </header>
    )
}

export default Header