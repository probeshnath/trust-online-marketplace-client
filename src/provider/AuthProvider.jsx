import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import auth from '../../firebase.config';

export const AuthContext = createContext();


const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true)


    const provider = new GoogleAuthProvider();


    // google login
    const handleGoogleLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // Register user with email, password
    const register = (email,password) =>{
      setLoading(true)
     return createUserWithEmailAndPassword(auth,email,password)
    }

     // Register user with email, password
     const login = (email,password) =>{
      setLoading(true)
      return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false)
        console.log(currentUser)
      })
      return ()=>{
        return unSubscribe()
      }
    },[])


    const authInfo = {
        handleGoogleLogin,
        register,
        login
    }

  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider