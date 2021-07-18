import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Nav = () => {
    return (
        <div id="navbar">
            <Link to="#">About</Link>
            <Link to="#">Pieflix</Link>
            <Link to="#">Robinhoop</Link>
            <Link to="#">Ask Meeple</Link>
            <Link to="#">Verticle Explorer</Link>
            <Link to="#">Get in Touch</Link>
        </div>
    )
}

export default Nav;
