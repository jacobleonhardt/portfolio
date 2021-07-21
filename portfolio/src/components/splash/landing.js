import React from 'react'
import Nav from '../global/nav.js'
import Greeting from '../greeting/greeting'
import About from '../about/about.js'
import Projects from '../projects/projects.js'
import './landing.css'

const Landing = () => {

    return (
        <>
            <Nav />
            <div id="content">
                <Greeting />
                <About />
                <Projects />
            </div>
        </>
    )
}

export default Landing;
