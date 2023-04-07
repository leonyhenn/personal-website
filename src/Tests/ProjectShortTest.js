import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ProjectShort } from './Components';

global.s3 = "https://maskoff.s3.ca-central-1.amazonaws.com/"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProjectShort 
          gif_moving={global.s3 + "bitcoin-geral-thumbnail.png"}
          gif_static={global.s3 + "bitcoin-geral-thumbnail.png"}
          title={"MASKOFF"}
          type={"Mobile App"}
          tech={["React Native","Python3","Flask","Redux","Xcode","Android Studio","AWS Lambda","AWS EC2","ElasticSreach","DynamoDB"]}
          display_location="right"
        />
        <ProjectShort 
          gif_moving={global.s3 + "bitcoin-geral-thumbnail.png"}
          gif_static={global.s3 + "bitcoin-geral-thumbnail.png"}
          title={"MASKOFF"}
          type={"Mobile App"}
          tech={["React Native","Python3","Flask","Redux","Xcode","Android Studio","AWS Lambda","AWS EC2","ElasticSreach","DynamoDB"]}
          display_location="left"
        />
      </header>
    </div>
  );
}

export default App;
