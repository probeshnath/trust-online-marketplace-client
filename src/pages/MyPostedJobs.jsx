import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import MyPostedSingleJob from '../components/MyPostedSingleJob'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'

const MyPostedJobs = () => {
    const [myPostedJobs, setMyPostedJobs] = useState(null)
    const {user} = useContext(AuthContext)
    const email = user.email;
    // console.log("myPostedJobs",myPostedJobs)
    
   useEffect(()=>{
    axios.get(`http://localhost:5000/jobs?email=${email}`,{withCredentials:true})
    .then(res =>{
        // console.log(res.data)
        setMyPostedJobs(res.data)
    })
    .catch(error =>{
        console.log(error)
    })
   },[])

   const handleDelete = (_id) =>{
    console.log(_id)
    axios.delete(`http://localhost:5000/jobs/${_id}`)
    .then(res =>{
        console.log(res.data)
        if(res.data.deletedCount > 0){
            toast.success("Job Deleted Successfully")
            const remaining = myPostedJobs.filter(job => job._id !== _id)
            setMyPostedJobs(remaining)
        }
    })
    .catch(error =>{
        console.log(error)
        toast.error(error)
    })
   }

  return (
    <div className='bg-red-100'>
        <Helmet>
        <title>Trust || My Posted Jobs</title>
      </Helmet>
        <div className="max-w-7xl py-10 mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-2'>
                {
                    myPostedJobs?.map((job)=>(
                        <MyPostedSingleJob key={job._id} handleDelete={handleDelete} job={job} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MyPostedJobs