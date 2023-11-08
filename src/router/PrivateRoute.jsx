import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate, useLocation } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)
const location = useLocation()
// console.log("location",location.pathname)

if(loading){
    return <div className='flex justify-center items-center h-screen'><HashLoader color="#36d7b7" /></div>
}

if(!user){
    return <Navigate state={location.pathname} to="/login" replace/>
}
  return children;
}

export default PrivateRoute