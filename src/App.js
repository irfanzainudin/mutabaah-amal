import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
// import admin from 'firebase-admin';

// pages
import Home from './pages/Home';
import Chatroom from './pages/Chatroom';
import Profile from './pages/Profile';

// stylesheets
import './App.css';

// api config
// import firebaseConfig from './api/firebase';

// admin.initializeApp(firebaseConfig);
// const db = admin.firestore();

function App() {
  return (
    <Router>
      <div className="Navbar">
        <div className="Navbar-header">
          <Link to="/"><h3 className="Home-link">Mutabaah Amal</h3></Link>
          <button><Link to="/profile"><FontAwesomeIcon icon={faUserCircle} className="User-icon" /></Link></button>
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/chatroom" component={Chatroom}/>
        <Route path="/profile" component={Profile}/>
      </Switch>
    </Router>
  );
}

export default App;
