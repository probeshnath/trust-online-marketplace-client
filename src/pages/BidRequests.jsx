import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'

const BidRequests = () => {
    const [bidRequests, setBidRequests] = useState()
    const { user } = useContext(AuthContext)
    console.log(user.email)
  
    useEffect(() => {
      axios.get(`http://localhost:5000/bidrequests?email=${user.email}`)
        .then(res => {
          console.log(res.data)
          setBidRequests(res.data)
        })
        .catch(error => {
          console.log(error)
        })
    }, [])
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
              <th>Button</th>
              {/* <th>Favorite Color</th> */}
            </tr>
          </thead>

          <tbody>
            {
              bidRequests?.map((bid,inx) => (
                <tr>
                  <th>{inx+1}</th>
                  <td>{bid.job_title}</td>
                  <td>{bid.seller_email}</td>
                  <td>{bid.deadline}</td>
                  <td>{bid.price}</td>
                  <td>pending</td>
                  <td><button className='bg-green-600 rounded-md text-white py-1 px-2'>Accept</button> <button className='bg-red-600 rounded-md text-white py-1 px-2'>Reject</button></td>
                  
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