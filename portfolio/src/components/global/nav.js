import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <div id="navbar">
            <Link to="/#about">About</Link>
            <Link to="/#pieflix">Pieflix</Link>
            <Link to="/#robinhoop">Robinhoop</Link>
            <Link to="/#ask-meeple">Ask Meeple</Link>
            <Link to="/#verticle-explorer">Verticle Explorer</Link>
            <Link to="/#contact">Get in Touch</Link>
        </div>
    )
}

export default Nav;
