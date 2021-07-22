import React from 'react'
import * as Scroll from 'react-scroll'
import { Link, scroller } from 'react-scroll'
import './footer.css'

const Footer = () => {

    return(
        <div id="footer">
                <Link id='arrow' className="icon-link" to="greeting" smooth={true} spy={true} duration={800}><ion-icon name="chevron-up-outline"></ion-icon></Link>
                <p>© Jacob Leonhardt 2021</p>
        </div>
    )
}

export default Footer;
