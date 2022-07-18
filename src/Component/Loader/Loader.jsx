import React from 'react';

import Header from '../Header/header';

import { FaRocket, FaCloud } from 'react-icons/fa'

import './Loader.css'


function Loader() {
    return (
        <div className="wrap-loading">
            <div className="loading">
                <div className='rocket'>
                    <FaRocket className="rocket-icon"/>
                    <FaCloud className="cloud-icon" style={{"--i": 0}} />
                    <FaCloud className="cloud-icon" style={{"--i": 1}} />
                    <FaCloud className="cloud-icon" style={{"--i": 2}} />
                    <FaCloud className="cloud-icon" style={{"--i": 3}} />
                </div>
                <span>
                    <i></i>
                </span>
            </div>
        </div>
    )
}

export default Loader ;