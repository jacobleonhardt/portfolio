import React from 'react'
import { Link } from 'react-router-dom'
import robinhoopLogo from '../../../photos/robinhoop-logo_forPortfolio.png'
import './project-cards.css'

const Robinhoop = () => {
    return (
        <div id="robinhoop" className="project">
            <div className="left">
                <img src={robinhoopLogo} alt="" className="project-logo"/>
            </div>
            <div classname="right">
                <h4>Robinhoop</h4>
                <p>Robinhoop is a full-stack clone of the Robinhood Investment app focused on investments in NBA teams.</p>
                <a href="https://robinhoop.herokuapp.com/">Checkout Robinhoop</a>
            </div>
        </div>
    )
}

export default Robinhoop
