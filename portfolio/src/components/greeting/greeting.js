import React from 'react'
import leonhardtLogo from '../../photos/jleonhardt-portfolio-logo.png';
import './greeting.css'

const Greeting = () => {
    return (
        <div id="greeting" className='card'>
            <img src={leonhardtLogo} className="logo" alt="Jacob Leonhardt logo" />
            <h1>Jacob Leonhardt</h1>
            <h2>A Creative Full-Stack Developer</h2>
            <div className="space med"></div>
            <div id='arrow' className="icon-link"><ion-icon name="chevron-forward-outline"></ion-icon></div>
        </div>
    )
}

export default Greeting;
