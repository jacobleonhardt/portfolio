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
        <>
            <Nav />
            <div id="content">
                <Greeting />
                <About />
                <Pieflix />
                <Robinhoop />
                <AskMeeple />
                <VerticleExplorer />
            </div>
        </>
    )
}

export default Landing;
