import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';

// our own components
import PrivateRoute from './components/PrivateRoute';

// pages
import Home from './pages/Home';
import Chatroom from './pages/Chatroom';
import Profile from './pages/Profile';
import Login from './pages/Login';

// contexts
import { AuthProvider, useAuth } from './contexts/AuthContext';

// stylesheets
import './App.css';

function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState();
  
  // useEffect(() => {
  //   if (currentUser) {
  //     setIsUserSignedIn(
  //       <Link to="/profile">
  //         <button className="user-icon">
  //           <FontAwesomeIcon icon={faUserCircle} />
  //         </button>
  //       </Link>
  //     );
  //   } else {
  //     setIsUserSignedIn(<Link to="/login"><h3 id="login-btn"><FontAwesomeIcon icon={faSignInAlt}/> Login</h3></Link>);
  //   }
  // }, []);

  return (
    <Router>
      <AuthProvider>
        <div className="navbar">
          <div className="navbar-header">
            <Link to="/"><h3 className="home-link">Mutabaah Amal</h3></Link>
            <Link to="/profile"><button className="user-icon"><FontAwesomeIcon icon={faUserCircle} /></button></Link>
          </div>
        </div>
        <Switch>
          <PrivateRoute exact path="/" component={Home}/>
          <PrivateRoute path="/chatroom/:amal">
            <div className="flex-container">
              <Chatroom />
            </div>
          </PrivateRoute>
          <PrivateRoute path="/profile" component={Profile}/>
          <Route path="/login">
            <div className="flex-container">
              <Login />
            </div>
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
