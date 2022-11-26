import React from 'react'
import Button from '@mui/material/Button';

import {
    signInWithPopup,
    GoogleAuthProvider,
  } from "firebase/auth";
import { auth, db } from "../firebase";

function SingIn ()  {


    // function signInWithGoogle() {
    //     const provider = new auth.GoogleAuthProvider()
    //     auth.SingInWithPopup(provider)

    // }


    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        await signInWithPopup(auth, provider)
          .then( async (result) => {
            console.log(result);
          })
          .catch((error) => {
            console.log(error);
          });
      };
      
    return(
        <div>
            <Button onClick={signInWithGoogle}>Sign In with Google </Button>
        </div>
    )
}
export default SingIn ;
