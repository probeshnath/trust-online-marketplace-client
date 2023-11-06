import axios from 'axios';
import React from 'react'
import toast from 'react-hot-toast';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'

const MyPostJobUpdate = () => {

    const navigate = useNavigate()
    
    const job = useLoaderData();
    // console.log(job)


    const updateJobs = (e) =>{
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const j_title = form.j_title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const min_price = form.min_price.value;
        const max_price = form.max_price.value;

        const UpdateJob = {
            email,
            j_title,
            deadline,
            description,
            category,
            min_price,
            max_price
        }
        console.log(job)

        axios.put(`http://localhost:5000/jobs/${job._id}`,UpdateJob)
        .then(res =>{
            console.log(res.data)
            if(res.data.modifiedCount > 0){
                toast.success("Job Updated Successfully")
                navigate("/mypostedjobs")
            }
        })
        .catch(error =>{
            console.log(error)
            toast.error(error.message)
        })

    }



    return (
        <div className='max-w-7xl mx-auto py-10'>
            <h2 className='text-green-600 font-bold text-center text-3xl pb-3'>Update Job</h2>
            <form onSubmit={updateJobs} className='flex gap-3 flex-col w-1/3 mx-auto '>
                <input type="Email" placeholder='Email' name='email' defaultValue={job.email} readOnly className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' />
                <input type="text" placeholder='Job Title' defaultValue={job.j_title} name='j_title' className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required />
                <input type="date" placeholder='Deadline' defaultValue={job.deadline} name='deadline' className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required />
                <textarea name="description" placeholder='Job Description..' defaultValue={job.description} className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required ></textarea>
                <select name='category' defaultValue={job.category} className='select bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required >
                    <option disabled >Pick your Job Category</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>Graphics Design</option>
                </select>
                <input type="number" placeholder='Minimum Price' name='min_price' defaultValue={job.min_price} required className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' />
                <input type="number" placeholder='Maximum Price' name='max_price' defaultValue={job.max_price} required className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' />
                <button className='bg-green-600 py-2 px-4 rounded-md text-white'>Update Job</button>
            </form>
        </div>
    )
}

export default MyPostJobUpdate