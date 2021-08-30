import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Who } from './Components/Who/Who';
import { What } from './Components/What'
import { Result } from './Components/Result';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Who} />
      <Route path='/what' component={What} />
      <Route path='/result' component={Result} />
    </Router>
  )
}

export default App;
