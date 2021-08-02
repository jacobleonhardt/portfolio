import React from 'react'
import pieflixLogo from '../../../photos/pieflix-logo_forPortfolio.png'
import './project-cards.css'

const Pieflix = () => {
    return (
        <div id="pieflix" className="project" >
            <img src={pieflixLogo} alt="pieflix application logo" className="project-logo"/>
            <p>So this started out as a joke with some friends, but ended up as
                the capstone project for my software development program.
                Pieflix is a full-stack web application that creates pizza-movie
                 pairings based on user inputs. The app was constructed using
                 Python, Flask, and SQL Alchemy in the backend; and it was
                 designed with JavaScript, React, Redux and custom CSS in the
                 frontend. One thing I've quite proud of is that the end result
                 of the project almost perfectly matches the wireframe. The
                 project was a blast to build!</p>
            <a href="https://pieflix.herokuapp.com/" target="_blank" className="button alt">Checkout pieflix</a>
            <a href="https://github.com/jacobleonhardt/pizza_movie_pairing_app" target="_blank" className="button alt">GitHub Repo</a>
        </div>
    )
}

export default Pieflix
