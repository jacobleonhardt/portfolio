import leonhardtLogo from './jleonhardt-portfolio-logo.png';
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={leonhardtLogo} className="logo" alt="Jacob Leonhardt logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
