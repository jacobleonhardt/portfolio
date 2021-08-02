import React from 'react'
import robinhoopLogo from '../../../photos/robinhoop-logo_forPortfolio.png'
import './project-cards.css'

const Robinhoop = () => {
    return (
        <div id="robinhoop" className="project">
            <img src={robinhoopLogo} alt="Robinhoop application logo" className="project-logo"/>
            <p>Robinhoop is a full-stack clone of the Robinhood Investment app
                focused on investments in NBA teams. The app joins the concepts
                of stock investing with fantasy basketball. I worked with a
                great group of guys to design and construct the app. It utilizes
                Python and Flask in the backend, and React and Redux in the
                front. This project ended up being more interesting than I
                initially suspected. While I'm not a basketball fan, and so it was a
                good experience to work on a project that wasn't my cup of tea,
                but that others could get in to.</p>
            <a href="https://robinhoop.herokuapp.com/" target="_blank" className="button">Checkout Robinhoop</a>
            <a href="https://github.com/NCHitsman/Python-Group-Project-Team-7" target="_blank" className="button">GitHub Repo</a>
        </div>
    )
}

export default Robinhoop
