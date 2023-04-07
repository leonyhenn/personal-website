import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Skill } from './Components';

global.s3 = "https://maskoff.s3.ca-central-1.amazonaws.com/"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Skill props={{mastery_level:"profient",name:"Python",logo_url:global.s3 + "python_logo.png"}}/>
        <Skill props={{mastery_level:"intermediate",name:"Python",logo_url:global.s3 + "python_logo.png"}}/>
        <Skill props={{mastery_level:"basic",name:"Python",logo_url:global.s3 + "python_logo.png"}}/>
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
