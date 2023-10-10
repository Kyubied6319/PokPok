import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload and we did here is v2 and now some music.
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/watch?v=NI6aOFI7hms"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lovefool by The Cardigans
        </a>
      </header>
    </div>
  );
}

export default App;
