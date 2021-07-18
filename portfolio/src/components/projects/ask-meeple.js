import React from 'react'
import { Link } from 'react-router-dom'
import askMeepleLogo from '../../photos/askMeeple_logo_orange.png'
import './projects.css'

const AskMeeple = () => {
    return (
        <div className="card" id="ask-meeple">
            <div className="one">
                <img src={askMeepleLogo} alt="" className="project-logo"/>
            </div>
            <div classname="two">
                <h4>Ask Meeple</h4>
                <p>Ask Meeple is a Quora clone application geared towards board game enthusiasts.</p>
                <Link to="https://ask-meeple.herokuapp.com/">Checkout Ask Meeple</Link>
            </div>
        </div>
    )
}

export default AskMeeple
