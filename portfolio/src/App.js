import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import Navigation from './components/global/navigation.js'
import Splash from './components/splash/splash.js'
import About from './components/about/about.js'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Splash />
      <About />
      {/* <Navigation />
      <Switch>
        <Router path="/" exact={true}>
          <div className="content">
            <Splash />
          </div>
        </Router>
      </Switch> */}
    </BrowserRouter>
  );
}

export default App;
