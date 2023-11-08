import React, { useContext } from 'react'
import GoogleLogin from '../components/GoogleLogin'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider'
import { updateProfile } from 'firebase/auth'
import toast from 'react-hot-toast'

const Register = () => {

    const {register} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()

    const handleRegister = (e) =>{
        e.preventDefault();

        const form = e.target;
        const fName = form.fName.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        const user = {
            fName,
            email,
            password,
            photo
        }
        // console.log("user",user)
        register(email,password)
        .then(data =>{
            console.log(data.user)
            if(data.user.email){
                toast.success("Register Successfully")
            }
             
            updateProfile(data.user,{
                displayName: fName,
                photoURL: photo || 'https://cdn.iconscout.com/icon/free/png-256/free-laptop-user-1-1179329.png?f=webp'
            })
            .then(()=>{
                    toast.success("User Updated Successfully")

            })
            navigate(location?.state ? location?.state : "/")
        })
        .catch((error)=>{
            console.log(error)
            toast.error(error.message)
        })
    }
  return (
    <div>
          <div className='bg-base-200'>
            <div className="hero min-h-screen max-w-7xl mx-auto ">
                <div className="flex justify-between flex-row-reverse  items-center ">
                    <div className="text-center hidden md:block w-full flex-1 lg:text-left">
                    <iframe src="https://lottie.host/?file=58dad7aa-9d54-48c7-b46d-99a9565a2f32/fpuwv3MZat.json"></iframe>
                    </div>
                    <div className="card flex-shrink-0 w-full flex-1  shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            {/* <div className='mx-auto text-center py-5'>
                                <img className='w-10 mx-auto' src="https://i.ibb.co/Lt7yWYT/png-transparent-computer-icons-user-profile-user-account-avatar-heroes-silhouette-black-thumbnail-re.png" alt="" />
                                <h3 className='text-2xl font-semibold'>Welcome</h3>
                            </div> */}
                            <h2 className='text-center font-bold text-green-600 text-3xl'>Register</h2>
                            <div className="form-control">
                                
                                <input type="text" placeholder="Full Name" name='fName' className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                                
                            </div>
                            <div className="form-control">
                                
                                <input type="email" placeholder="Email" name='email' className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                            </div>
                            <div className="form-control">
                                
                                <input type="password" placeholder="password" name='password' className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 " required />
                                
                            </div>
                            <div className="form-control">
                                
                                <input type="text" placeholder="Photo Url" name='photo' className="text-black font-medium placeholder:text-black placeholder:font-semibold outline-none py-2 px-1 border-b-2 "  />
                                
                            </div>
                            
                            <div className="form-control pb-2 mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
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