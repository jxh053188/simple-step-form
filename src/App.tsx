import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Who } from './Who';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Who} />
      <Route exact path='/what' component={What} />
      <Route exact path='/when' component={When} />
      <Route exact path='/where' component={Where} />
      <Route exact path='/result' component={Result} />
    </Router>
  )
}

export default App;
