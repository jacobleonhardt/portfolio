import React from 'react'
import leonhardtLogo from '../../photos/jleonhardt-portfolio-logo.png';
import './splash.css'

const Splash = () => {
    return (
        <div className='splash'>
            <img src={leonhardtLogo} className="logo" alt="Jacob Leonhardt logo" />
            <h1>Jacob Leonhardt</h1>
            <h2>A Creative Full-Stack Developer</h2>
            <div className="space med"></div>
            <a href="/#about" className="icon-link"><ion-icon name="chevron-down-outline"></ion-icon></a>
        </div>
    )
}

export default Splash;
