import React from 'react'
import { Link } from 'react-router-dom'
import verticalExplorerLogo from '../../../photos/vertical_explorer_logo-transparent.png'
import './project-cards.css'

const Projects = () => {
    return (
        <div id="vertical-explorer" className="project">
            <div className="left">
                <img src={verticalExplorerLogo} alt="" className="project-logo"/>
            </div>
            <div classname="right">
                <h4>Vertical Explorer</h4>
                <p>Vertical Explorer is a full-stack application that provides tracking services for rock climbers.</p>
                <Link to="https://vertical-explorer.herokuapp.com/">Checkout Vertical Explore</Link>
            </div>
        </div>
    )
}

export default Projects
