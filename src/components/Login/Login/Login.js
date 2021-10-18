import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const auth = getAuth();

    const handleRegistration = e => {
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
        })
        e.preventDefault();
    }

    const handleEmailChange = e => {
        setEmail(e.terget.value)
    }

    const handlePasswordChange = e => {
        setPassword(e.terget.value);
    }


    const {signInUsingGoogle} = useAuth;
    const handleGoogleSignIn = () => {
        signInUsingGoogle();
    }
    return (
        <div className="mx-5">
            <h2>pleade Register</h2>

            <form onSubmit={handleRegistration}>
  <div className="row mb-3">
    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required/>
    </div>
  </div>
  <div className="row mb-3">
    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
    </div>
  </div>
  <div className="row mb-3">
    <div className="col-sm-10 offset-sm-2">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck1"/>
        <label className="form-check-label" htmlFor="gridCheck1">
          Example checkbox
        </label>
      </div>
    </div>
  </div>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

        <br /><br /><br />

            <button onClick={handleGoogleSignIn} className="btn btn-warning">Google sign In</button>
        </div>
    );
};

export default Login;