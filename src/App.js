import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import firebase from 'firebase/app';
import 'firebase/auth';
// import admin from 'firebase-admin';

// pages
import Home from './pages/Home';
import Chatroom from './pages/Chatroom';
import Profile from './pages/Profile';
import Login from './pages/Login';

// stylesheets
import './App.css';

// api config
import { firebaseConfig } from './api/firebase';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const db = admin.firestore();

function App() {
  const [isThereAnyUserSignedIn, setIsThereAnyUserSignedIn] = useState();
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsThereAnyUserSignedIn(<button><Link to="/profile"><FontAwesomeIcon icon={faUserCircle} className="user-icon" /></Link></button>);
      } else {
          setIsThereAnyUserSignedIn(<h3 id="login-btn"><Link to="/login">Login</Link></h3>);
      }
    })
  }, []);

  return (
    <Router>
      <div className="navbar">
        <div className="navbar-header">
          <Link to="/"><h3 className="home-link">Mutabaah Amal</h3></Link>
          {
            isThereAnyUserSignedIn
          }
        </div>
      </div>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/chatroom/:amal">
          <div className="flex-container">
            <Chatroom />
          </div>
        </Route>
        <Route path="/profile" component={Profile}/>
        <Route path="/login" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
