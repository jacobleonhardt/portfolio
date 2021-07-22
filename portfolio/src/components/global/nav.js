import React from 'react'
import * as Scoll from 'react-scroll';
import { Link, scroller } from 'react-scroll'
import './nav.css'

const Nav = () => {

    scroller.scrollTo('scroll-container', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    })

    return (
        <div id="navbar">
            <Link to="about" smooth={true} spy={true} duration={800} activeClass="active">About</Link>
            <Link to="pieflix" smooth={true} spy={true} duration={800} activeClass="active">Pieflix</Link>
            <Link to="ask-meeple" smooth={true} spy={true} duration={800} activeClass="active">Ask Meeple</Link>
            <Link to="vertical-explorer" smooth={true} spy={true} duration={800} activeClass="active">Verticle Explorer</Link>
            <Link to="robinhoop" smooth={true} spy={true} duration={800} activeClass="active">Robinhoop</Link>
            <Link to="contact" smooth={true} spy={true} duration={800} activeClass="active">Contact</Link>
        </div>
    )
}

export default Nav;
