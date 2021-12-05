import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from './Feelings';
import Understanding from './Understanding';
import Supported from './Supported';
import Comments from './Comments';
import Review from './Review';
import {useState} from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  let [infoToAdd, setInfoToAdd] = useState({ feeling: 0, understanding: 0 , support: 0, comments: ''});

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
      <Route exact path="/">
      <Feelings />
      </Route>
      <Route exact path="/Understanding">
        <Understanding />
      </Route>
      <Route exact path="/Supported">
        <Supported />
      </Route>
      <Route exact path="/Comments">
        <Comments />
      </Route>
      <Route exact path="/Review">
        <Review />
      </Route>
      
      

      </Router>
    </div>

  );
}

export default App;
