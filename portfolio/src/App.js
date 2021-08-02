import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/global/nav.js'
import Mobile from './components/global/mobile.js'
import Greeting from './components/greeting/greeting'
import About from './components/about/about.js'
import Projects from './components/projects/projects.js'
import Contact from './components/contact/contact.js'
import Footer from './components/global/footer.js';
import './index.css';

function App() {

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    reportWindowSize()
  }, [])

  const reportWindowSize = () => {
    if (window.innerWidth <= 768) {
        setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }

  window.addEventListener('resize', reportWindowSize);

  return (
    <BrowserRouter>
      {isMobile ? <Mobile /> : <Nav />}
      <div id="content">
        <Greeting />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
