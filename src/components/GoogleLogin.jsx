import React from 'react'
import { FaGoogle } from 'react-icons/fa'

const GoogleLogin = () => {
  return (
    <div className='pt-0 pb-8  -mt-8'>
        <div className="divider ">OR</div>
        <button className='flex gap-4 border-2 mx-auto rounded-md items-center font-bold text-red-500 py-2 px-4'><FaGoogle /> Google</button>
    </div>
  )
}

export default GoogleLogin