import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from 'firebase/app';
import 'firebase/auth';


// stylesheets
import './Login.css';
import { Link } from 'react-router-dom';

function LoginNotice({ notice }) {
  return (
    <h4 id="login-notice">
      { notice }
    </h4>
  )
}

function Login() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [user, setUser] = useState();
  const [notice, setNotice] = useState(
    <h4 id="login-notice">
      This app is currently on an invite-only basis, so you cannot sign up.<br/>Contact <a href="mailto:m.irfan.zain@gmail.com"><u>Irfan</u></a> if you're interested.
    </h4>
  );
  var history = useHistory();

  const userLogin = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    .then((userCreds) => {
      setUser(userCreds.user);
      history.push("/"); // redirects to home page
    })
    .catch((error) => {
      setNotice(<LoginNotice notice={error.message} />); // give users a nice-looking notice
    })
  }

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  }

  return (
    <div className="login-container container">
      <div className="login-header">
        <h1>Login?</h1>
      </div>
      <form className="login-details" onSubmit={(e) => userLogin(e)}>
        <label for="login-email">Email</label>
        <input type="email" id="login-email" placeholder="What is your email?" className="login-email" value={userEmail} onChange={(e) => handleEmailChange(e)} />
        <label for="login-password">Password</label>
        <input type="password" id="login-password" placeholder="We will never ask for your password" className="login-password" value={userPassword} onChange={(e) => handlePasswordChange(e)} />
        <button type="submit" className="login-submit"><FontAwesomeIcon icon={faLock} /> Verify</button>
      </form>
      { notice }
      <Link to="/"><h4 id="forgot-password"><u>Forgot your password?</u></h4></Link>
    </div>
  )
}

export default Login;