import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import Header from '../Header/header'
import { FaCode, FaReact, FaHtml5, FaCss3Alt, FaBirthdayCake, FaUserAlt, FaSchool, FaLanguage } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { IoIosSchool } from "react-icons/io";
import Typewriter from 'typewriter-effect';

import './About.css'
function About() {
    return (
        <div className='About'>
            <Header />
            
            <span className="content">
                <div className='wrap-content'>
                    <h1>About me</h1>
                    <h1>About me</h1>
                </div>
                <div className='wrap-content-type'>
                    <Typewriter
                    options={{
                        strings: ['I’m currently a Information System student at University Of Information Technology', ' I love learning about Science and Technology!!'],
                        autoStart: true,
                        loop: true,
                        delay: -1000
                    }}
                    />
                </div>
                
            </span>
            <section className="About-content">
                <div className="Information">
                    <ul >
                        <div className="Information-item">
                            <div className="about-icon" >
                                <FaUserAlt />
                            </div>
                            <li>Nguyen Huu Nhat Tan</li>
                        </div>
                        <div className="Information-item">
                            <div className="about-icon" >
                                <FaBirthdayCake />
                            </div>
                                <li>03/09/2000</li>
                        </div>
                        <div className="Information-item">
                            <div className="about-icon" >
                                <IoIosSchool />
                            </div>
                                <li>Information System</li>
                        </div>
                        <div className="Information-item">
                            <div className="about-icon" >
                                <FaSchool />
                            </div>
                                <li>University of Information Technology</li>
                        </div>
                        <div className="Information-item">
                            <div className="about-icon" >
                                <FaLanguage />
                            </div>
                                <li>Toeic: </li>
                        </div>
                    </ul>
                </div>
                <div className="about-me">
                    <p>With the knowledge of what's in the school and course, i've always wanted to become a Front-end Developer. 
                        Having a solid knowledge of HTML, CSS, JAVASCRIPT, REACTJS, plus skills i hone every day.
                         I always to give my best to help the company grow and achieve for myself
                    </p>
                    <button className="btn-down" ><a className="link-down" href={require ("../../asset/img/CV/Mycv.pdf")} download="MyCV">Download My CV</a> </button>
                </div>
            </section>

        </div>
    )
}

export default About;