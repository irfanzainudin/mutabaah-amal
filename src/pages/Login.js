import React from 'react';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// stylesheets
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="login-container container">
      <div className="login-header">
        <h1>Login?</h1>
      </div>
      <form className="login-details">
        <label for="login-email">Email</label>
        <input type="email" id="login-email" placeholder="What is your email?" className="login-email" />
        <label for="login-password">Password</label>
        <input type="password" id="login-password" placeholder="We will never ask for your password" className="login-password" />
        <button type="submit" className="login-submit"><FontAwesomeIcon icon={faLock} /> Verify</button>
      </form>
      <h4 id="no-signup-notice">This app is currently on an invite-only basis, so you cannot sign up.<br/>Contact <a href="mailto:m.irfan.zain@gmail.com"><u>Irfan</u></a> if you're interested.</h4>
      <Link to="/"><h4 id="forgot-password"><u>Forgot your password?</u></h4></Link>
    </div>
  )
}

export default Login;