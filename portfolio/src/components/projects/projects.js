import React from 'react'
import Pieflix from './project-cards/pieflix.js'
import Robinhoop from './project-cards/robinhoop.js'
import AskMeeple from './project-cards/ask-meeple.js'
import VerticleExplorer from './project-cards/verticle-explorer.js'
import './projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <h2>Projects</h2>
            <div id="project-cards">
                <Pieflix />
                <Robinhoop />
                <AskMeeple />
                <VerticleExplorer />
            </div>
        </div>
    )
}

export default Projects;
