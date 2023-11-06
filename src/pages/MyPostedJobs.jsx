import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import MyPostedSingleJob from '../components/MyPostedSingleJob'

const MyPostedJobs = () => {
    const [myPostedJobs, setMyPostedJobs] = useState(null)
    const {user} = useContext(AuthContext)
    const email = user.email;
    // console.log("myPostedJobs",myPostedJobs)
    
   useEffect(()=>{
    axios.get(`http://localhost:5000/jobs?email=${email}`)
    .then(res =>{
        // console.log(res.data)
        setMyPostedJobs(res.data)
    })
    .catch(error =>{
        console.log(error)
    })
   },[])

  return (
    <div className='bg-red-100'>
        <div className="max-w-7xl py-10 mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 px-2'>
                {
                    myPostedJobs?.map((job)=>(
                        <MyPostedSingleJob key={job._id} job={job} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default MyPostedJobs