import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './components/global/nav.js'
import Greeting from './components/greeting/greeting'
import About from './components/about/about.js'
import Projects from './components/projects/projects.js'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <>
            <Nav />
            <div id="content">
                <Greeting />
                <About />
                <Projects />
            </div>
        </>
    </BrowserRouter>
  );
}

export default App;
