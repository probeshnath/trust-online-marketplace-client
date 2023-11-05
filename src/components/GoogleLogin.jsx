import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../provider/AuthProvider'

const GoogleLogin = () => {

  const {handleGoogleLogin} = useContext(AuthContext)

  const googleLogin = () =>{
    handleGoogleLogin()
    .then((data) => {
      console.log(data.user)
    })
    .catch((error)=>{
      console.log(error)
    })
  }
  return (
    <div className='pt-0 pb-8  -mt-8'>
        <div className="divider ">OR</div>
        <button onClick={googleLogin} className='flex gap-4 border-2 mx-auto rounded-md items-center font-bold text-red-500 py-2 px-4'><FaGoogle /> Google</button>
    </div>
  )
}

export default GoogleLogin