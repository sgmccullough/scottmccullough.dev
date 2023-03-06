import React from 'react';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="Button" style={{ float: 'right' }}>
        <Button variant="text">Work</Button>
        <Button variant="text">About</Button>
      </div>
      <header className="Main-content">
        <p>
          Hello, I'm Scott.
        </p>
        <p>
          I'm a Cloud Infrastructure Engineer.
        </p>
        <a href="https://github.com/sgmccullough">
          Find me on GitHub.
        </a>
      </header>
    </div>
  );
}

export default App;
