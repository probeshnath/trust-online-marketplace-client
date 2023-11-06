import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)

if(loading){
    return <h2>Loading....</h2>
}

if(!user){
    return <Navigate to="/login" replace/>
}
  return children;
}

export default PrivateRoute