import React from 'react';
import './App.css';
const user = {
  name : 'Tumblepoke',
  imageUrl: 'https://drive.google.com/uc?export=view&id=1X0ENC_-RHRpF4WkV8ncSUpTcK_aVULwH/view?usp=drive_link',
  imageSize: 90,
};
function App() {
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <header className="App-header">
        <img src={user.imageUrl} className="App-logo" alt="logo" />
        <p>
          Tumblepoke: "Pok Pok"<br></br> Here is one of its favorite songs
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
