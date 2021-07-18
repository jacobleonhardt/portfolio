import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import Navigation from './components/global/navigation.js'
import Landing from './components/splash/landing.js'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Landing />
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
