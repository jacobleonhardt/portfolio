import React, { useState } from 'react'
import * as Scoll from 'react-scroll';
import { Link, scroller } from 'react-scroll'
import './mobile.css'

const Mobile = () => {

    const [isOpen, setIsOpen] = useState(false)
    const content = document.getElementById('content')

    scroller.scrollTo('scroll-container', {
        duration: 1000,
        delay: 0,
        smooth: 'easeInOutQuart'
    })


    const toggleMobile = () => {
        setIsOpen(!isOpen);
    }

    content.addEventListener('click', () => {
        setIsOpen(false)
    });

    return (
        <div id="mobile" className={ isOpen ? "open" : "closed"}>
            {isOpen ? <a onClick={toggleMobile} className="mobile-toggle"><ion-icon name="close-outline"></ion-icon></a> :
                    <a onClick={toggleMobile} className="mobile-toggle"><ion-icon name="grid-outline"></ion-icon></a>}
            {isOpen ?
                <div id="mobile-menu">
                    <Link to="about" smooth={true} spy={true} duration={800} activeClass="active">About</Link>
                    <Link to="pieflix" smooth={true} spy={true} duration={800} activeClass="active">Pieflix</Link>
                    <Link to="ask-meeple" smooth={true} spy={true} duration={800} activeClass="active">Ask Meeple</Link>
                    <Link to="vertical-explorer" smooth={true} spy={true} duration={800} activeClass="active">Verticle Explorer</Link>
                    <Link to="robinhoop" smooth={true} spy={true} duration={800} activeClass="active">Robinhoop</Link>
                    <Link to="contact" smooth={true} spy={true} duration={800} activeClass="active">Contact</Link>
                </div> :
                <></>
            }
        </div>
    )
}

export default Mobile;
