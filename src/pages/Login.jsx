import React from 'react'
import { Link } from 'react-router-dom'
import GoogleLogin from '../components/GoogleLogin'

const Login = () => {
    return (
        <div className='bg-base-200'>
            <div className="hero min-h-screen max-w-7xl mx-auto ">
                <div className="flex justify-between  items-center ">
                    <div className="text-center hidden md:block w-full flex-1 lg:text-left">
                        <iframe className='' src="https://lottie.host/?file=eb28818d-7c5c-4f6c-91b5-68fde2f5427a/fGOIemb1Ik.json"></iframe>
                    </div>
                    <div className="card flex-shrink-0 w-full flex-1  shadow-2xl bg-base-100">
                        <form className="card-body">
                            <div className='mx-auto text-center py-5'>
                                <img className='w-10 mx-auto' src="https://i.ibb.co/Lt7yWYT/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black-thumbnail-re.png" alt="" />
                                <h3 className='text-2xl font-semibold'>Welcome Back</h3>
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Email</span>
                                </label> */}
                                <input type="email" placeholder="Email" className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                            </div>
                            <div className="form-control">
                                {/* <label className="label">
                                    <span className="label-text">Password</span>
                                </label> */}
                                <input type="password" placeholder="password" className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control pb-2 mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                        <p className='text-gray-500'>Don't have an account <Link className='text-blue-700 font-bold' to="/register">Register</Link> </p>
                        </form>
                        <GoogleLogin />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login