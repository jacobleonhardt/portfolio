import React from 'react'
import { Link } from 'react-router-dom'
import askMeepleLogo from '../../../photos/askMeeple-logo_forPortfolio.png'
import './project-cards.css'

const AskMeeple = () => {
    return (
        <div id="ask-meeple" className="project">
            <div className="left">
                <img src={askMeepleLogo} alt="" className="project-logo"/>
            </div>
            <div classname="right">
                <h4>Ask Meeple</h4>
                <p>Ask Meeple is a Quora clone application geared towards board game enthusiasts.</p>
                <a href="https://ask-meeple.herokuapp.com/">Checkout Ask Meeple</a>
            </div>
        </div>
    )
}

export default AskMeeple
