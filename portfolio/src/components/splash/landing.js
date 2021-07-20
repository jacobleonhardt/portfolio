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
            <div className='slider'>
                <div className='slides'>
                    <div id='arrow' className="icon-link"><ion-icon name="chevron-forward-circle-outline"></ion-icon></div>
                    <Greeting />
                    <About />
                    <Pieflix />
                    <Robinhoop />
                    <AskMeeple />
                    <VerticleExplorer />
                </div>
            </div>
        </div>
    )
}

export default Landing;
