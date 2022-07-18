import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import Header from '../Header/header'
import Titl from 'react-vanilla-tilt'
import Title from 'react-vanilla-tilt'

import './Skill.css'
function Skill() {
    return (
        <div className="skill">
            <Header />  
            <div className="Description">
                <div className='wrap-content1'>
                    <h1>Skills</h1>
                    <h1>Skills</h1>
                </div>
            </div>
            <div className="skill-wrap">
                <div className="box">
                    <span></span>
                    <div className="box-content">
                        <h2>Front-End</h2>
                        <p>HTML</p>
                        <div>
                            <img className="skill-img" src={require ('../../asset/img/Skill/html.png')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <div className="box-content">
                        <h2>Front-End</h2>
                        <p>CSS</p>
                        <div>
                            <img className="skill-img" src={require ('../../asset/img/Skill/css.png')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <div className="box-content">
                        <h2>Front-End</h2>
                        <p>Javascript</p>
                        <div>
                            <img className="skill-img" src={require ('../../asset/img/Skill/js.webp')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <div className="box-content">
                        <h2>Front-End</h2>
                        <p>Reactjs</p>
                        <div>
                            <img className="skill-img" src={require ('../../asset/img/Skill/ReactJS.png')} alt="" />
                        </div>
                    </div>
                </div>

                <div className="box">
                    <span></span>
                    <div className="box-content">
                        <h2>Database</h2>
                        <p>SQL Server, MySQL, MongoDB, Firebase</p>
                        <div>
                            <img className="skill-img" src={require ('../../asset/img/Skill/database.webp')} alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        
    )
}

export default Skill;

