import React from 'react'
import leonhardtLogo from '../../photos/jleonhardt-portfolio-logo.png';
import './splash.css'

const Splash = () => {
    return (
        <div className='splash'>
            <img src={leonhardtLogo} className="logo" alt="Jacob Leonhardt logo" />
            <h1><span className="blue">Jacob</span> <span className="orange">Leonhardt</span></h1>
            <h2>A Creative Full-Stack Developer</h2>
        </div>
    )
}

export default Splash;
