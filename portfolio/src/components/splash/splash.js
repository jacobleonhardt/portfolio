import React from 'react'
import leonhardtLogo from '../../jleonhardt-portfolio-logo.png';
import './splash.css'

const Splash = () => {
    return (
        <div className='splash'>
            <img src={leonhardtLogo} className="logo" alt="Jacob Leonhardt logo" />
            <h1>Jacob Leonhardt</h1>
        </div>
    )
}

export default Splash;
