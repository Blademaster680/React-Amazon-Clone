import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault(); // This stops the form from refreshing the page!!!
        // Login logic here

        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                // Logged in, redirect to homepage
                history.push('/')
            })
            .catch(e => alert(e.message));
    }

    const register = event => {
        event.preventDefault(); // This stops the form from refreshing the page!!!
        // Register logic here
        auth.createUserWithEmailAndPassword(email, password)
            .then(auth => {
                // Created a user and logged in, redirect to homepage...
                history.push('/')
            })
            .catch(event => alert(event.message));
    }

    return (
        <div>
            <div className="login">
                <Link to="/">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Amazon.com-Logo.svg/800px-Amazon.com-Logo.svg.png"
                        alt=""
                        className="login__logo"
                    />
                </Link>

                <div className="login__container">
                    <h1>Sign In</h1>
                    <form action="" type="submit">
                        <h5>Email</h5>
                        <input value={email} onChange={event => setEmail(event.target.value)} type="email" name="" id="" />
                        <h5>Password</h5>
                        <input value={password} onChange={event => setPassword(event.target.value)} type="password" name="" id="" />
                        <button onClick={login} className="login__signInButton">Sign In</button>
                    </form>

                    <p>
                        By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice,
                        our Cookies Notice and our Interest-Based Ads Notice.
                    </p>
                    <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
                </div>
            </div>
        </div>
    )
}

export default Login
