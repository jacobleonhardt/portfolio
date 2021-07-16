import React from 'react';
import Navigation from './components/global/navigation.js'
import Splash from './components/splash/splash.js'
import './index.css';

function App() {
  return (
    <div className="content">
      <Navigation />
      <Splash />
    </div>
  );
}

export default App;
