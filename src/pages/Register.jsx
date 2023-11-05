import React from 'react'
import GoogleLogin from '../components/GoogleLogin'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div>
          <div className='bg-base-200'>
            <div className="hero min-h-screen max-w-7xl mx-auto ">
                <div className="flex justify-between flex-row-reverse  items-center ">
                    <div className="text-center hidden md:block w-full flex-1 lg:text-left">
                    <iframe src="https://lottie.host/?file=58dad7aa-9d54-48c7-b46d-99a9565a2f32/fpuwv3MZat.json"></iframe>
                    </div>
                    <div className="card flex-shrink-0 w-full flex-1  shadow-2xl bg-base-100">
                        <form className="card-body">
                            {/* <div className='mx-auto text-center py-5'>
                                <img className='w-10 mx-auto' src="https://i.ibb.co/Lt7yWYT/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black-thumbnail-re.png" alt="" />
                                <h3 className='text-2xl font-semibold'>Welcome</h3>
                            </div> */}
                            <h2 className='text-center font-bold text-green-600 text-3xl'>Sign Up </h2>
                            <div className="form-control">
                                
                                <input type="text" placeholder="Full Name" className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                                
                            </div>
                            <div className="form-control">
                                
                                <input type="email" placeholder="Email" className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                            </div>
                            <div className="form-control">
                                
                                <input type="password" placeholder="password" className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                                
                            </div>
                            <div className="form-control">
                                
                                <input type="text" placeholder="Photo Url" className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                                
                            </div>
                            
                            <div className="form-control pb-2 mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        <p className='text-gray-500'>Already have an account <Link className='text-blue-700 font-bold' to="/login">Login</Link> </p>
                        </form>
                        <GoogleLogin />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register