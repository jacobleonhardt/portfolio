import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'
import headshot from '../../photos/profile-pic.jpg'
import './about.css'

const About = () => {


    const viewResume = () => {
        window.open("https://www.linkedin.com/in/jacob-leonhardt-b19067ba/", '_blank')
    }

    return(
        <div id="about">
            <div className="left">
                <img src={headshot} alt="Jacob Leonhardt headshot"/>
            </div>
            <div className="right">
                <h2>About</h2>
                <p>I'm an enthusiastic, creative full-stack developer. Whether coding an applications, writing stories, or making board games, bringing something from concept to reality is an exciting process! What I love about JavaScript, React, Redux, and CSS, is that they allow developers to do this is a more visual way. Writing backend or frontend code that renders data on screen, then designing the presentation of that data is a creative adventure. And like all adventures, a few obstacles makes the story a little more interesting.</p>
                <p>I'm a Christian and nerd who drinks a lot of coffee. Some of my favorite things are British Literature, Rend Collective, Yacht Rock, Nintendo, and sarcasm.</p>
                <span>
                    <Link className="button" onClick={viewResume}>Resume</Link>
                    <Link to="contact" className="button" smooth={true} spy={true} duration={800}>Contact</Link>
                </span>
            </div>
            <div className="full">
            <h3>Skills</h3>
                <div id="additional">
                    <i class="devicon-javascript-plain colored"></i>
                    <i class="devicon-react-original colored"></i>
                    <i class="devicon-redux-original colored"></i>
                    <i class="devicon-python-plain colored"></i>
                    <i class="devicon-flask-original colored"></i>
                    <i class="devicon-sqlalchemy-plain"></i>
                    <i class="devicon-postgresql-plain colored"></i>
                    <i class="devicon-html5-plain colored"></i>
                    <i class="devicon-css3-plain colored"></i>
                    <i class="devicon-git-plain colored"></i>
                    <i class="devicon-github-original colored"></i>
                    <i class="devicon-ubuntu-plain colored"></i>
                    <i class="devicon-vscode-plain colored"></i>
                    <i class="devicon-wordpress-plain"></i>
                    <i class="devicon-photoshop-plain colored"></i>
                    <i class="devicon-illustrator-plain colored"></i>
                </div>
            </div>
        </div>
    )
}

export default About;
