import React, { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Header from '../Header/header'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import ReactPlayer from 'react-player'

import './Contact.css'
import Loader from '../Loader/Loader';

function Contact() {
    const form = useRef();

        const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ire79og', "template_qmyp81j", form.current, '1C4hyPlUvnPnFQZTG')
        .then((result) => {
            alert("Message sending success!");
        }, (error) => {
            alert("Message sending failed!");
        });
    };
    
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
            <div>
            <Header />
            <div className="contact-wrap">
                <form className="form-contact" ref={form} onSubmit={sendEmail}>
                    <h1 className="ct-me">Contact me</h1>
                    <div className="input-box">
                        <input type="text" name="user_name" className="form-input-name" required="required" />
                        <span>Name</span>
                    </div>
                    <div className="input-box">
                        <input type="email" name="user_email" className="form-input-email" required="required" />
                        <span>Email</span>
                    </div>
                    <div className="input-box">
                        <input name="message" className="form-input-message" required="required" />
                        <span>Message</span>
                    </div>
                    <input type="submit" value="Send" className="submit-btn" />
                    <span className="note">It may take some time to complete!!</span>
                </form>
                <div className="Link-contact">
                    <ul>
                        <a href="https://www.facebook.com/nearxingtomeer" className="contact-link">
                            <FaFacebook />
                            <li>Facebook</li>
                        </a>
                        <a href="https://github.com/nhnhattan" className="contact-link">
                            <FaGithub />
                            <li>Github</li>
                        </a>
                        <a href="https://www.linkedin.com/in/nhnhattan/" className="contact-link">
                            <FaLinkedin/>
                            <li>Linkedin</li>
                        </a>
                        <a href="" className="contact-link">
                            <HiMail />
                            <li>nhnhattan@outlook.com.vn</li>
                        </a>    
                        <li>
                            <ReactPlayer url='https://www.youtube.com/watch?v=_WhDdyhGMJ4&feature=youtu.be' 
                                width="300px"
                                height="250px"
                                className="video-container"
                                // playing="true"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    }
    </>
    )
}

export default Contact;
