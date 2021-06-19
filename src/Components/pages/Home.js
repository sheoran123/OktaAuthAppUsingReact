import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';

const Home = () => {
    const history = useHistory();
    const { oktaAuth, authState } = useOktaAuth();

    if (authState.isPending) return null;

    const login = async () => history.push('/login');
    
    const logout = async () => oktaAuth.signOut();

    const button = authState.isAuthenticated ? (
        <div>
            <p className="lead">You have entered the staff portal ,<Link to="/staff">Click here</Link></p>
            <button className="btn btn-light btn-lg" onClick={logout}>Logout</button>
        </div>
    ):(
        <div>
            <p className="lead">If you are a staff member please get your credential from your supervisor</p>
            <button className="btn btn-light btn-lg" onClick={login}>Login</button>
        </div>
    );

    return (
        <div className="jumbotron">
            <h1 className="display-4">Tomato staff portal</h1>
        </div>
    );
};
export default Home;
