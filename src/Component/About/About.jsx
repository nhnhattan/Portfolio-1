import React, {useState, useEffect}  from 'react';
import { Link, Outlet } from 'react-router-dom'
import Header from '../Header/header'
import { FaCode, FaReact, FaHtml5, FaCss3Alt, FaBirthdayCake, FaUserAlt, FaSchool, FaLanguage } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si'
import { IoIosSchool } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import Loader from '../Loader/Loader';

import './About.css'
function About() {

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
                                    <li>TOEIC: </li>
                            </div>
                        </ul>
                    </div>
                    <div className="about-me">
                        <p>With the knowledge of what's in the school and course, i've always wanted to become a Front-end Developer. 
                            Having a solid knowledge of HTML, CSS, JAVASCRIPT, REACTJS, plus skills i hone every day.
                            I always to give my best to help the company grow and achieve for myself
                        </p>
                        <button className="btn-down" >
                        {/* <DownloadLink
                            label="Save"
                            filename="Mycv.pdf"
                            exportFile={() => Promise.resolve("./Mycv.pdf")}

                        /> */}
                            <a className="link-down" href={"https://doc-10-c0-docs.googleusercontent.com/docs/securesc/vhlq2itb8kllkrd8e4lfl0mma45naq8j/67v3qcjrasskvefsgh79f3qas3eksf6a/1658156775000/11805274766228785216/11805274766228785216/12GBxhXTQI1OwOIEbEhP9y7C8yfGjZrpz?e=download&ax=ACxEAsavyzYGBW8sYvbQFP_8BH875eKgWmHkql64g-LRtKpMAEPBt9dJQ36WDnpSs8SvsqDLWhitrh-035NI85-RMYf7C31YGECBkwNYUVqFobcjaZMDTzdpF1tQbcasO6GTUBErYr8Xk7a3_ZrQdcmsUU4zPczy5DStWBXCTgkRaeiPwk05ibyPDyfxVjC0cTIk6ergQ7U7OHNUKJzYesptq-WohZ5fiU1wa1QabAV813imivT6H08DYEWPq0bpVr3v4BvxmG8qm2_IQetN1TaYEj-eoIdlNujYEc5q7dtt5SuwuWXmlVazkjRZCkRrGkFfH1_G0Ma6Q1sqQKYx1fhX-2Hffve5rmtigfx60mP7xM1RrAfjVKuvriyCnJEmeQcFc4UKjj40mFobgQv9Ah7XZT4144KwNemW5uI132sgNUvElrjwPuGLuEsPz05rs-eJzo5kn8-X-0sAOr5LhOMx2CEvwon5WZWfHMM_tLsuXPNJu_CWDZTNlkb0ae9ZBkoPbFo39FNloi2tQWjziBoG1QRSclSm6eFCg95F7LX6luwaG1coosClXlkdkja8QRPj2si32-aSSs3w52Ze3uw7L-voftABMnoqumChEXQti9gYhV438KhhFaYPwTvkPDFneEwjxfSlpXjhzjG7_W1ZqahY1lg6SXb_2g7tC4jAX4MZ3yzEYXhEg7wkfLjtDh2bdSEFkXn4TzrqADNXBIfdrCXpmOfOVuyO8eR3h-ib3jAjWliVdKjT9PaMA8O42N9rK_ATNojNFKN6cZmSaHg..."} target="_blank" download>Download My CV</a>
                        </button>
                    </div>
                </section>

            </div>
        }
        </>
    )
}

export default About;
