import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { What } from './Components/What'
import { Result } from './Components/Result';
import { When } from './Components/When';
import { Where } from './Components/Where';
import { Who } from './Components/Who';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Who} />
      <Route path='/what' component={What} />
      <Route path='/when' component={When} />
      <Route path='/where' component={Where} />
      <Route path='/result' component={Result} />
    </Router>
  )
}

export default App;
