import React from 'react';
import './App.css';

//Temp placeholder of sample user till backend is set up
const user = {
  name : 'Tumblepoke',
  imageUrl: 'https://drive.google.com/uc?export=view&id=1X0ENC_-RHRpF4WkV8ncSUpTcK_aVULwH',
  imageSize: 90,
  age: 0,
  stats: [
    {title: "Str", attr: 8, id: 1},
    {title: "Dex", attr: 7, id: 2},
    {title: "Con", attr: 10, id: 3},
    {title: "Int", attr: 8, id: 4},
    {title: "Wis", attr: 2, id: 5},
    {title: "Cha", attr: 15, id: 6},
  ]
};

//list of actions (to be implemented)
const actions = [
  {title:'Feed', attr:'', id: 1},
  {title:'Play', attr:'', id: 2},
  {title:'Train', attr:'', id: 3},
  {title:'Study', attr:'', id: 4},
]

//function to list user stats




function App() {
  const listStats = user.stats.map(stat =>
    <li key = {stat.id}>
      {stat.title}: {stat.attr}
    </li>
    );
  const listActions = actions.map(action =>
    <li key = {action.id}>
      {action.title}: {action.attr}
    </li>
    );
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
      <body>
        <div className='Stats'>
          <ul>{listStats}</ul>
        </div>
        <div className='Actions'>
          <ul>{listActions}</ul>
        </div>
      </body>
    </div>
  );
}

export default App;
