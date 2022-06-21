import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AppIntro from './Pages/AppIntro.js'
import MainPage from './Pages/MainPage.js'
import YouTube from 'react-youtube';

global.s3 = "https://maskoff.s3.ca-central-1.amazonaws.com/"


export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/MASKOFF" component={AppIntro} />
        <Route exact path="/" component={MainPage} />
      </Switch>
    </Router>
  );
}


