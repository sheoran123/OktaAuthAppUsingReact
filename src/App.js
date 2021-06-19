import './App.css';
import React from 'react';
import { Route, useHistory } from 'react-router-dom';
import Navbar from './Components/Layout/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './Components/pages/Home'
import Staff from './Components/pages/Staff'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth , toRelativeUrl } from '@okta/okta-auth-js';
import { oktaAuthConfig, oktaSignInConfig } from './config';
import Login from './Components/auth/Login'




const oktaAuth = new OktaAuth(oktaAuthConfig);
function App() {
  const history = useHistory();

  const customAuthHandler = () => {
    history.push('/login');
  };

  const restoreOriginalUri = async (_oktaAuth, originalUri) => {
    history.replace(toRelativeUrl(originalUri, window.location.origin));
  };

  
  return (
    <Router>
      <Security oktaAuth={oktaAuth}
      onAuthRequired={customAuthHandler}
      restoreOriginalUri={restoreOriginalUri}>
        <div className="App">
          <Navbar></Navbar>
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
            <Route path='/login/callback' component={LoginCallback} />
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
