import React from 'react'
import headshot from '../../photos/profile-pic.jpg'
import './about.css'

const About = () => {


    const viewResume = () => {
        window.open("https://www.linkedin.com/in/jacob-leonhardt-b19067ba/", '_blank')
    }

    return(
        <div id="about" className="card">
            <div className="full">
                <h2>Contact</h2>
                <a href="https://www.linkedin.com/in/jacob-leonhardt-b19067ba/" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
                <a href="https://www.facebook.com/jacobleonhardt649" target="_blank"><ion-icon name="logo-facebook"></ion-icon></a>
                <a href="mailto:jacob.leonhardt649@gmail.com" target="_blank"><ion-icon name="mail-outline"></ion-icon></a>

            </div>
        </div>
    )
}

export default About;
