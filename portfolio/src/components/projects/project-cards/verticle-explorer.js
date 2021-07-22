import React from 'react'
import { Link } from 'react-router-dom'
import verticalExplorerLogo from '../../../photos/verticalExplorer-logo_forPortfolio.png'
import './project-cards.css'

const Projects = () => {
    return (
        <div id="vertical-explorer" className="project">
            <img src={verticalExplorerLogo} alt="" className="project-logo"/>
            <h4>Vertical Explorer</h4>
            <p>Vertical Explorer is a full-stack application that provides tracking services for rock climbers.</p>
            <a href="https://vertical-explorer.herokuapp.com/">Checkout Vertical Explore</a>
        </div>
    )
}

export default Projects
