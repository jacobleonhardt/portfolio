import React from 'react'
import Nav from '../global/nav.js'
import Greeting from '../greeting/greeting'
import About from '../about/about.js'
import Projects from '../projects/pieflix.js'
import Pieflix from '../projects/pieflix.js'
import Robinhoop from '../projects/robinhoop.js'
import AskMeeple from '../projects/ask-meeple.js'
import VerticleExplorer from '../projects/verticle-explorer.js'
import './landing.css'

const Landing = () => {

    return (
        <div id="content">
            <Nav />
            <div className='landing'>
                <Greeting />
                <About />
                <Projects />
                <Pieflix />
                <Robinhoop />
                <AskMeeple />
                <VerticleExplorer />
            </div>
        </div>
    )
}

export default Landing;