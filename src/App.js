import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="Navbar">
        <div className="Navbar-header">
          <h3 className="Home-link">Mutabaah Amal</h3>
          <button><FontAwesomeIcon icon={faUserCircle} className="User-icon" /></button>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
      </Switch>
    </Router>
  );
}

export default App;
