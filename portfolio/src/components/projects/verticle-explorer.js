import React from 'react'
import { Link } from 'react-router-dom'
import verticalExplorerLogo from '../../photos/vertical_explorer_logo-transparent.png'
import './projects.css'

const Projects = () => {
    return (
        <div className="card" id="vertical-explorer">
            <div className="one">
                <img src={verticalExplorerLogo} alt="" className="project-logo"/>
            </div>
            <div classname="two">
                <h4>Vertical Explorer</h4>
                <p>Vertical Explorer is a full-stack application that provides tracking services for rock climbers.</p>
                <Link to="https://vertical-explorer.herokuapp.com/">Checkout Vertical Explore</Link>
            </div>
        </div>
    )
}

export default Projects
