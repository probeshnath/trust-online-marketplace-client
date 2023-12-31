import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet-async'

const MyBids = () => {
  const [bids, setBids] = useState()
  const { user } = useContext(AuthContext)
  // console.log(user.email)

   // complete task
   const handleCompleteJobRequest = (id) => {
    // console.log("this is id:",id)
    let job_Status = { job_Status: "Complete",job_progress: 100 };
    axios.put(`https://market-place-server-mern.vercel.app/bid/update/${id}`, job_Status)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          toast.success("Complete the Task")
        }
      })
      .catch(error => {
        console.log(error)
        toast.error(error)
      })
  }


  useEffect(() => {
    axios.get(`https://market-place-server-mern.vercel.app/bids?email=${user.email}`,{withCredentials:true})
      .then(res => {
        // console.log(res.data)
        setBids(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [handleCompleteJobRequest])

 

  return (
    <div className='max-w-7xl mx-auto py-5'>
      <Helmet>
        <title>Trust || My Bids</title>
      </Helmet>
      <h2 className='pt-2 pb-4 text-center text-3xl font-bold text-green-800'>My Bits</h2>
      <div>
        <div className="">
          <table className="table  overflow-x-scroll table-xs">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Job Title</th>
                <th>Seller Email</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Complete</th>
                {/* <th>Favorite Color</th> */}
              </tr>
            </thead>

            <tbody>
              {
                bids?.map((bid, inx) => (
                  <tr key={inx}>
                    <th>{inx + 1}</th>
                    <td>{bid.job_title}</td>
                    <td>{bid.buyer_email}</td>
                    <td>{bid.deadline}</td>
                    <td>{bid.job_Status}</td>
                    <td><button className={`${(bid.job_Status !== "Pending" && bid.job_Status !== "Complete") ? "bg-green-600 rounded-md py-1 px-2 text-white " : "bg-gray-500 rounded-md py-1 px-2 text-white"}`} disabled={(bid.job_Status === "Pending" || bid.job_Status === "Complete" || bid.job_Status === "Canceled") ? true : false} onClick={() => handleCompleteJobRequest(bid._id)}>Complete</button></td>
                    {/* <td>Blue</td> */}
                  </tr>
                ))
              }

            </tbody>

          </table>
        </div>
      </div>

    </div>
  )
}

export default MyBids