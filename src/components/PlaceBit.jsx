import React from 'react'

const PlaceBit = () => {
  return (
    <div>
         <div>
                <h1>Job Title: {job.j_name}</h1>
                <p>Seller Email: {user.email}</p>
                <p>Buyer Email: {job.email}</p>
                <p>{job.deadline}</p>

            </div>
    </div>
  )
}

export default PlaceBit