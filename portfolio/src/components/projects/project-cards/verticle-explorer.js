import React from 'react'
import verticalExplorerLogo from '../../../photos/verticalExplorer-logo_forPortfolio.png'
import './project-cards.css'

const Projects = () => {
    return (
        <div id="vertical-explorer" className="project">
            <img src={verticalExplorerLogo} alt="Vertical Explorer application logo" className="project-logo"/>
            <p>Vertical Explorer is a full-stack application that provides
                tracking services for rock climbers. I like this project because
                it actually solves a problem for my mom, who keeps track of her
                climbing height via the notes app on her phone. The app uses
                Sequelize in the backend and, of course, React on the frontend.</p>
                <p>The app is currently still be constructed. But feel free to
                    check it out anyways!</p>
            <a href="https://vertical-explorer.herokuapp.com/" target="_blank" className="button alt">Checkout Vertical Explorer</a>
            <a href="https://github.com/jacobleonhardt/vertical_explorer" target="_blank" className="button alt">GitHub Repo</a>
        </div>
    )
}

export default Projects
