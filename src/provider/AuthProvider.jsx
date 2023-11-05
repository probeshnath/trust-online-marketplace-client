import React, { useState } from 'react'
import { createContext } from 'react'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.config';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const provider = new GoogleAuthProvider();


    const handleGoogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const authInfo = {
        handleGoogleLogin
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider