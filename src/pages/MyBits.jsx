import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'

const MyBids = () => {
  const [bids, setBids] = useState()
  const { user } = useContext(AuthContext)
  console.log(user.email)

  useEffect(() => {
    axios.get(`http://localhost:5000/bids?email=${user.email}`)
      .then(res => {
        // console.log(res.data)
        setBids(res.data)
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
                <th>Status</th>
                <th>Complete</th>
                {/* <th>Favorite Color</th> */}
              </tr>
            </thead>

            <tbody>
              {
                bids?.map((bid,inx) => (
                  <tr>
                    <th>{inx+1}</th>
                    <td>{bid.job_title}</td>
                    <td>{bid.buyer_email}</td>
                    <td>{bid.deadline}</td>
                    <td>{bid.job_Status}</td>
                    <td>Compelte</td>
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