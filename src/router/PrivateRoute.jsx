import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { Navigate } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

const PrivateRoute = ({children}) => {
const {user, loading} = useContext(AuthContext)

if(loading){
    return <div className='flex justify-center items-center h-screen'><HashLoader color="#36d7b7" /></div>
}

if(!user){
    return <Navigate to="/login" replace/>
}
  return children;
}

export default PrivateRoute