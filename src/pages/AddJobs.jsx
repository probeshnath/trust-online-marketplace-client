import React, { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const AddJobs = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    // console.log(user)
    const createJobs = (e) => {
        e.preventDefault();

        const form = e.target;

        const email = form.email.value;
        const j_title = form.j_title.value;
        const deadline = form.deadline.value;
        const description = form.description.value;
        const category = form.category.value;
        const min_price = form.min_price.value;
        const max_price = form.max_price.value;

        const job = {
            email,
            j_title,
            deadline,
            description,
            category,
            min_price,
            max_price
        }
        // console.log(job)

        axios.post("http://localhost:5000/jobs", job, { withCredentials: true })
            .then(res => {
                console.log(res.data)
                if (res.data.insertedId) {
                    toast.success("Job Created Successfully")
                    navigate("/mypostedjobs")
                }
            })
            .catch(error => {
                console.log(error)
                toast.error(error.message)
            })

    }
    return (
        <div className='max-w-7xl mx-auto flex justify-center items-center '>
            <Helmet>
                <title>Trust || Add New Job</title>
            </Helmet>
            <div className='shadow-lg w-full md:w-1/3'>
                <div className='py-10 px-3'>
                    {/* <img src="" alt="" /> */}
                    <h3 className='text-3xl text-center pb-5 font-bold '>  <span className='text-green-600 capitalize'>{user?.displayName}</span>,<br /> <span className='text-orange-500'>Create a New Job</span></h3>
                    <form onSubmit={createJobs} className='flex gap-3 flex-col'>
                        <input type="Email" placeholder='Email' name='email' defaultValue={user?.email} readOnly className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' />
                        <input type="text" placeholder='Job Title' name='j_title' className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required />
                        <input type="date" placeholder='Deadline' name='deadline' className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required />
                        <textarea name="description" placeholder='Job Description..' className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required ></textarea>
                        <select name='category' className='select bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' required >
                            <option disabled selected>Pick your Job Category</option>
                            <option>Web Development</option>
                            <option>Digital Marketing</option>
                            <option>Graphics Design</option>
                        </select>
                        <input type="number" placeholder='Minimum Price' name='min_price' required className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' />
                        <input type="number" placeholder='Maximum Price' name='max_price' required className='bg-gray-200 text-gray-700 p-2 w-full outline-none rounded-md' />
                        <button className='bg-green-600 py-2 px-4 rounded-md text-white'>Create Job</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddJobs