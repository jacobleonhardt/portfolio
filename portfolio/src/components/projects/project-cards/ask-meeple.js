import React from 'react'
import askMeepleLogo from '../../../photos/askMeeple-logo_forPortfolio.png'
import './project-cards.css'

const AskMeeple = () => {
    return (
        <div id="ask-meeple" className="project">
            <img src={askMeepleLogo} alt="Ask Meeple application logo" className="project-logo"/>
            <p>Ask Meeple is a Quora clone application geared towards board game
                enthusiasts. Ask Meeple was built as a group project where I got
                to work with two other fantastic developers. I headed up the
                frontend design on the project. For this one we used Pug as our
                structure code, and custom CSS for design.</p>
            <a href="https://ask-meeple.herokuapp.com/" target="_blank" className="button">Checkout Ask Meeple</a>
            <a href="https://github.com/TranquilTort/Ask-Meeple" target="_blank" className="button">GitHub Repo</a>
        </div>
    )
}

export default AskMeeple
