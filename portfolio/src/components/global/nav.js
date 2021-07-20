import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <div id="navbar">
            <Link to="about" smooth={true}>About</Link>
            <Link to="pieflix" smooth={true}>Pieflix</Link>
            <Link to="robinhoop" smooth={true}>Robinhoop</Link>
            <Link to="ask-meeple" smooth={true}>Ask Meeple</Link>
            <Link to="verticle-explorer" smooth={true}>Verticle Explorer</Link>
            <Link to="contact" smooth={true}>Get in Touch</Link>
        </div>
    )
}

export default Nav;
