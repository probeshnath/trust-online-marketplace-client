import React from 'react'
import {BsCalendarDate} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Job = ({job}) => {
  return (
    <div data-aos="fade-up" data-aos-duration="1000" className='shadow-lg bg-white rounded-md p-5'>
        <h2 className='text-2xl'>{job.j_title}</h2>
        <p className='text-gray-500 font-bold text-sm'>{job.category}</p>
        <p className='flex items-center gap-2'> <BsCalendarDate className='text-sm' /> {job.deadline}</p>
        <p>${job.min_price} - ${job.max_price}</p>
        <p>{job.description.slice(0,50)}</p>
        <Link to={`/jobs/${job._id}`} ><button className='bg-green-800 text-white py-1 px-3 rounded-md mt-3'>Bid Now</button></Link>
    </div>
  )
}

export default Job