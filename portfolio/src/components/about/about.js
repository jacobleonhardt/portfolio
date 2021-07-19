import React from 'react'
import headshot from '../../photos/profile-pic.jpg'
import './about.css'

const About = () => {
    return(
        <div id="about" className="card">
            <img src={headshot} alt="Jacob Leonhardt headshot"/>
            <h3>About</h3>
            <p>I'm an enthusiastic developer of creative projects. Whether coding an applications, writing stories, or making board games, bringing something from concept to reality is an exciting process; and I appreciate how JavaScript, React, Redux, and CSS allow developers to do this is a visual way.</p>
        </div>
    )
}

export default About;
