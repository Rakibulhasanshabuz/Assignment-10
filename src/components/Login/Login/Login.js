import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';



const Login = () => {
    const [userDetails, setUserDetails] = useState({
      email: '',
      password: ''
    })
    const {user, setUser} = useAuth();

    const auth = getAuth();

    const handleSubmit = e => {
        e.preventDefault();
        loginWithEmailPass(userDetails.email, userDetails.password)
    }



    const handleChange = e => {
      setUserDetails({ ...userDetails, [e.target.name] : e.target.value });
    }

    const loginWithEmailPass = (email, password) => {
      createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => { 
  const user = userCredential.user;
  setUser(user);
})
.catch((error) => {
  const errorCode = error.code;
  const errorMessage = error.message;
  console.log(error)
});
  }


    const {signInUsingGoogle} = useAuth();
    return (
        <div className="mx-5">
            <h2 className="text-danger">Please Login</h2>

            <form onSubmit={handleSubmit}>
               <div className="md:flex md:items-center mb-6">
                  <div className="w-20">
                     <label className="block text-gray-500 font-medium mb-1 md:mb-0 pr-4" htmlFor="inline-email">
                     Email
                     </label>
                  </div>
                  <div>
                     <input name="email" value={userDetails.email} onChange={handleChange} className="rounded py-2 px-4 " id="inline-email" type="email" placeholder="Enter your email" />
                  </div>
               </div>
               <div>
               <div>
                     <label htmlFor="inline-password">
                     Password
                     </label>
                  </div>
                  <div>
                     <input name="password" value={userDetails.password} onChange={handleChange} className=" rounded bg-gray-200 border-2 py-2 px-4" id="inline-email" type="password" placeholder="Enter your password" />
                  </div>
               </div>
               <div className="px-4 py-3">
               <button
               className="btn btn-success"
                  type="submit"
               >
                  Submit
               </button>
            </div>
            </form>

        <br /><br /><br />

        <div>----------OR----------</div>
        <br />

            <button onClick={signInUsingGoogle} className="btn btn-warning mb-5"><i className="fab fa-google"></i> Google sign In</button>
        </div>
    );
};

export default Login;