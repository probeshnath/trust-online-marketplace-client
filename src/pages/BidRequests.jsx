import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'
import toast from 'react-hot-toast'
import "react-step-progress-bar/styles.css";
import { ProgressBar } from 'react-step-progress-bar'

const BidRequests = () => {
  const [bidRequests, setBidRequests] = useState()
  const { user } = useContext(AuthContext)
  console.log(user.email)


  // accept job
  const handleAcceptJobRequest = (id) => {
    // console.log("this is id:",id)
    let job_Status = { job_Status: "Progress",job_progress: 50 };
    axios.put(`http://localhost:5000/bid/update/${id}`, job_Status)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          toast.success("Accept the Bid")
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  // reject job
  const handleRejectJobRequest = (id) => {
    // console.log("this is id:",id)
    let job_Status = { job_Status: "Canceled" };
    axios.put(`http://localhost:5000/bid/update/${id}`, job_Status)
      .then(res => {
        console.log(res.data)
        if (res.data.modifiedCount > 0) {
          toast.success("Reject the Bid")
        }
      })
      .catch(error => {
        console.log(error)
      })
  }



  useEffect(() => {
    axios.get(`http://localhost:5000/bidrequests?email=${user.email}`,{withCredentials:true})
      .then(res => {
        console.log(res.data)
        setBidRequests(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  


  return (
    <div className='max-w-7xl mx-auto py-5'>
      <h2 className='pt-2 pb-4 text-center text-3xl font-bold text-green-800'>My Bits</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Job Title</th>
                <th>Seller Email</th>
                <th>Deadline</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
                {/* <th>Favorite Color</th> */}
              </tr>
            </thead>

            <tbody>
              {
                bidRequests?.map((bid, inx) => (
                  <tr key={inx}>
                    <th>{inx + 1}</th>
                    <td>{bid.job_title}</td>
                    <td>{bid.seller_email}</td>
                    <td>{bid.deadline}</td>
                    <td>{bid.price}</td>
                    <td>{bid.job_Status}</td>
                    {
                      bid.job_Status !== "Pending" ? <td>
                      <ProgressBar
                        width={80}
                        percent={bid.job_progress || 0}
                        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
                      />
                    </td> : 
                    // (bid.job_Status !== "Canceled" ? 
                    <td>
                      <button onClick={() => handleAcceptJobRequest(bid._id)} className='bg-green-600 rounded-md text-white mr-2 py-1 px-2'>Accept</button>
                      <button onClick={() => handleRejectJobRequest(bid._id)} className='bg-red-600 rounded-md text-white py-1 px-2'>Reject</button>
                    </td>
                  //   {/* :
                  //   <button className='bg-red-600 rounded-md text-white py-1 px-2'>Canceled</button>)
                    
                  // // */}
                } 
                    
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

export default BidRequests