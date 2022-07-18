import React from 'react';
import './introduce.css'

function Slide() {
    return (
        <section className="Intro">
            
            <div className="wrap">
                <span className="center">
                        <div class="circle1"></div>
                        <div class="circle2"></div>

                </span>
                <div className="cube-box">
                    {/* <img src="../../asset/img/Cube/css.png" alt="cube" /> */}
                    <img src='https://codluck.com/wp-content/uploads/2022/02/ReactJS.png' alt=''/>
                    <img src='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' alt=''/>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAD2APNZeHXaSogF8b_YZyz5IAyXZR9rsWvRyB2rb5LBb1hOCz8qwmo-_a3NlcWjg34ko&usqp=CAU" alt="" />
                    <img src="https://www.kindpng.com/picc/m/464-4640184_css3-png-download-css-icon-transparent-png.png" alt="" />
                    <img src="https://p0.pikist.com/photos/944/299/clouds-floppy-clouds-cloudy-sky-black-white-sky-nature-sky-cloudy-wallpaper-background.jpg" alt="" />
                    <img src="https://p0.pikist.com/photos/944/299/clouds-floppy-clouds-cloudy-sky-black-white-sky-nature-sky-cloudy-wallpaper-background.jpg" alt="" />
                </div>
                <span className="Content">
                    <span className="avatar"><img src={require ('../../asset/img/Logo/Untitled2.jpg')} alt="" /></span>
                    <h1>HELLO,</h1>
                    <h3>I'm Nhat Tan.</h3>
                    <p>Welcome to my portfolio!!</p>
                </span>

            </div>
            <span className= "cloudy">
                <img  src="https://free.vector6.com/wp-content/uploads/2021/03/freepng1211-dam-may-may-troi-may-troi-may-trang-png-hinh-tach-nen-1.png" alt="" />
            </span>
        </section>
    )
}

export default Slide;