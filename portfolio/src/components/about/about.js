import React from 'react'
import headshot from '../../photos/profile-pic.jpg'
import './about.css'

const About = () => {
    return(
        <div id="about">
            <div className="pic">
                <img src={headshot} alt="Jacob Leonhardt headshot"/>
            </div>
            <div className="copy">
                <h3>About</h3>
                <p>I'm an enthusiastic developer of creative projects. Whether coding an applications, writing stories, or making board games, bringing something from concept to reality is an exciting process! What I love about JavaScript, React, Redux, and CSS, is that they allow developers to do this is a more visual way. Writing backend or frontend code that renders data on screen, then designing the presentation of that data is a creative adventure. And like all adventures, a few obstacles makes the story a little more interesting.</p>
            </div>
        </div>
    )
}

export default About;
