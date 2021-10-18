import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    
    const auth = getAuth();

    const signInUsingGoogle = () => {
        console.log('log in')
        const googleProvider = new GoogleAuthProvider();
       signInWithPopup(auth, googleProvider)
       .then(result => {
           setUser(result.user);
       })
       .catch((error) => {
        const errorMessage = error.message;
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(error)
      });
    }

        useEffect( () => {
            const unSubscribed = onAuthStateChanged(auth, user => {
              if(user){
                setUser(user);
              } 
               else{
                   setUser({});
               }
            });
            return () => unSubscribed;
        }, []);

    const logOut = () => {
        signOut(auth)
        .then(() => { });
    }

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}


export default useFirebase;