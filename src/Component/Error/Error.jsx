import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import Header from '../Header/header'


import './Error.css'

function Error() {
    return (
        <div className="wrap-project">
            <Header  />
            <div className="project">
                <div className="project-warn">
                    <h1>404</h1>
                    <h3>Oops! The page you are looking for cannot be found</h3>
                    <p>Don't worry, we will update as soon as possible</p>
                </div>

                <div class="tree">
                    <div class="top" style={{"--j": 0}}> 
                        <span style={{"--i": 0}}></span>
                        <span style={{"--i": 1}}></span>
                        <span style={{"--i": 2}}></span>
                        <span style={{"--i": 3}}></span>
                    </div>
                    <div class="top" style={{"--j": 1}}> 
                        <span style={{"--i": 0}}></span>
                        <span style={{"--i": 1}}></span>
                        <span style={{"--i": 2}}></span>
                        <span style={{"--i": 3}}></span>
                    </div>
                    <div class="top" style={{"--j": 2}}> 
                        <span style={{"--i": 0}}></span>
                        <span style={{"--i": 1}}></span>
                        <span style={{"--i": 2}}></span>
                        <span style={{"--i": 3}}></span>
                    </div>
                    <div class="bottom"> 
                        <span style={{"--i": 0}}></span>
                        <span style={{"--i": 1}}></span>
                        <span style={{"--i": 2}}></span>
                        <span style={{"--i": 3}}></span>
                    </div>
                    <span class="shadow"></span>
                </div>   
            </div>
        </div>
    )
}

export default Error;

