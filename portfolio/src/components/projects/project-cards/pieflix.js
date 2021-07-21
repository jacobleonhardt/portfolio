import React from 'react'
import { Link } from 'react-router-dom'
import pieflixLogo from '../../../photos/pieflix-logo.png'
import './project-cards.css'

const Pieflix = () => {
    return (
        <div id="pieflix" className="project">
            <div className="left">
                <img src={pieflixLogo} alt="" className="project-logo"/>
            </div>
            <div classname="right">
                <h4>pieflix</h4>
                <p>Pieflix is a full-stack web application that creates pizza-movie pairings based on user inputs.</p>
                <Link to="https://pieflix.herokuapp.com/">Checkout pieflix</Link>
            </div>
        </div>
    )
}

export default Pieflix
