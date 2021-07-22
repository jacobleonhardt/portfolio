import React from 'react'
import * as Scroll from 'react-scroll'
import { Link } from 'react-scroll'
import leonhardtLogo from '../../photos/jleonhardt-portfolio-logo.png';
import './greeting.css'

const Greeting = () => {
    return (
        <div id="greeting" className="card">
            <img src={leonhardtLogo} className="logo" alt="Jacob Leonhardt logo" />
            <h1>Jacob Leonhardt</h1>
            <h2>A Creative Full-Stack Developer</h2>
            <Link id='arrow' className="icon-link" to="about" smooth={true} spy={true} duration={800} activeClass="active"><ion-icon name="chevron-down-outline"></ion-icon></Link>
        </div>
    )
}

export default Greeting;
