import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSign, faSignInAlt, faSignOutAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
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
  const [isUserSignedIn, setIsUserSignedIn] = useState();

  const userSignout = () => {
    firebase.auth().signOut()
    .then(() => {
      console.log("logged out");
    })
    .catch((error) => {
      console.log(error);
    })
  }
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsUserSignedIn(
          <Link to="/profile">
            <button className="user-icon">
              <FontAwesomeIcon icon={faUserCircle} />
            </button>
          </Link>
        );
      } else {
        setIsUserSignedIn(<Link to="/login"><h3 id="login-btn"><FontAwesomeIcon icon={faSignInAlt}/> Login</h3></Link>);
      }
    })
  }, []);

  return (
    <Router>
      <div className="navbar">
        <div className="navbar-header">
          <Link to="/"><h3 className="home-link">Mutabaah Amal</h3></Link>
          {
            isUserSignedIn
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
        <Route path="/login">
          <div className="flex-container">
            <Login firebase={firebase} />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
