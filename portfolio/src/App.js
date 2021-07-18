import React from 'react';
import { BrowserRouter, Switch, Router } from 'react-router-dom';
import Landing from './components/splash/landing.js'
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Landing />
    </BrowserRouter>
  );
}

export default App;
