import React from 'react'
import { Link } from 'react-router-dom'
import pieflixLogo from '../../photos/pieflix-logo.png'
import robinhoopLogo from '../../photos/robinhoop-logo.png'
import askMeepleLogo from '../../photos/askMeeple_logo_orange.png'
import verticalExplorerLogo from '../../photos/vertical_explorer_logo-transparent.png'
import './projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <h3>Projects</h3>
            <div id="pieflix" className="project">
                <div className="one">
                    <img src={pieflixLogo} alt="" className="project-logo"/>
                </div>
                <div classname="two">
                    <h4>pieflix</h4>
                    <p>Pieflix is a full-stack web application that creates pizza-movie pairings based on user inputs.</p>
                    <Link to="https://pieflix.herokuapp.com/">Checkout pieflix</Link>
                </div>
            </div>
            <div id="robinhoop" className="project">
                <div className="one">
                    <img src={robinhoopLogo} alt="" className="project-logo"/>
                </div>
                <div classname="two">
                    <h4>Robinhoop</h4>
                    <p>Robinhoop is a full-stack clone of the Robinhood Investment app focused on investments in NBA teams.</p>
                    <Link to="https://robinhoop.herokuapp.com/">Checkout Robinhoop</Link>
                </div>
            </div>
            <div id="ask-meeple" className="project">
                <div className="one">
                    <img src={askMeepleLogo} alt="" className="project-logo"/>
                </div>
                <div classname="two">
                    <h4>Ask Meeple</h4>
                    <p>Ask Meeple is a Quora clone application geared towards board game enthusiasts.</p>
                    <Link to="https://ask-meeple.herokuapp.com/">Checkout Ask Meeple</Link>
                </div>
            </div>
            <div id="vertical-explorer" className="project">
                <div className="one">
                    <img src={verticalExplorerLogo} alt="" className="project-logo"/>
                </div>
                <div classname="two">
                    <h4>Vertical Explorer</h4>
                    <p>Vertical Explorer is a full-stack application that provides tracking services for rock climbers.</p>
                    <Link to="https://vertical-explorer.herokuapp.com/">Checkout Vertical Explore</Link>
                </div>
            </div>
        </div>
    )
}

export default Projects
