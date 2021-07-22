import React from 'react'
import Pieflix from './project-cards/pieflix.js'
import Robinhoop from './project-cards/robinhoop.js'
import AskMeeple from './project-cards/ask-meeple.js'
import VerticleExplorer from './project-cards/verticle-explorer.js'
import './projects.css'

const Projects = () => {
    return (
        <div id="projects">
            <div id="project-cards">
                <Pieflix />
                <AskMeeple />
                <VerticleExplorer />
                <Robinhoop />
            </div>
        </div>
    )
}

export default Projects;
