import React, { useEffect } from 'react';
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

  return (
    <BrowserRouter>
      {window.innerWidth > 768 ? <Nav /> : <Mobile />}
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
