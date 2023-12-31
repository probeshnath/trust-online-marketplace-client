import React, { useContext, useEffect, useState } from 'react'
import { useLoaderData, useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../provider/AuthProvider';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';

const JobDetails = () => {
    // const loadedJob = useLoaderData();
    const [job, setJob]= useState({})
    const [show, setShow] = useState(false)
    // console.log("my job", job)
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()

    const {id} = useParams();
    // console.log("first id",id)


    useEffect(()=>{
        axios.get(`https://market-place-server-mern.vercel.app/jobs/${id}`)
        .then(res => {
            console.log("this is data",res.data)
            setJob(res.data)
        })
        .catch(error =>{
            console.log("error",error)
        })
    },[])

    const handleBit = (e) => {
        e.preventDefault()

        const form = e.target;
        const price = form.price.value;
        const deadline = form.deadline.value;
        const seller_email = form.seller_email.value;
        const buyer_email = form.buyer_email.value;

        const bidProject = {
            price,
            deadline,
            seller_email,
            buyer_email,
            job_title: job.j_title,
            description: job.description,
            job_Status: "Pending",
            job_progress: 0,
        }
        // console.log(bidProject)

        axios.post("https://market-place-server-mern.vercel.app/bids", bidProject)
            .then(res => {
                console.log(res.data)
                if (res?.data?.insertedId) {
                    toast.success("Place Your Bid Successfully")
                    navigate("/mybids")
                }
            })
            .catch(error => {
                console.log(error)
                toast.error(error)
            })

    }

    if (job?.email === user?.email) {
        setShow(true)
    }

    return (
        <div>
            <Helmet>
                <title>{`Trust || ${job?.j_title}`}</title>
            </Helmet>
            <div className='max-w-7xl flex w-full md:w-2/3 lg:w-1/2 h-screen justify-center items-center mx-auto'>
                <div className='p-10 shadow-xl'>
                    <h2 className='text-2xl font-bold'>Job Details</h2>
                    <div>
                        <h1 className='text-blue-800 pt-3 text-lg font-bold'>{job?.j_title}</h1>
                        <p className='text-gray-500'>{job?.email}</p>
                        <p>${job?.min_price} - ${job?.max_price}</p>
                        <p>{job?.deadline}</p>
                        <p className='text-gray-500 py-1'>{job?.description}</p>
                        {/* <button className=''>Place Your Bit</button> */}
                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        {
                            !show ? <button className="bg-green-700 py-1 px-3 text-white rounded-md" onClick={() => document.getElementById('my_modal_1').showModal()}>Place Your Bid</button> :
                                <button disabled className='bg-gray-500  text-white rounded-md py-1 px-3'>Place Your Bid</button>
                        }

                        <dialog id="my_modal_1" className="modal">
                            <div className="modal-box">

                                {/* <div className="modal-action"> */}
                                <form method="dialog" onSubmit={handleBit} className='flex justify-center '>
                                    <div>

                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Price</span>
                                            </label>
                                            <input type="number" name='price' placeholder="Your Bidding Amount" required className="input input-bordered outline-none w-full " />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Deadline</span>
                                            </label>
                                            <input type="date" name='deadline' placeholder="Deadline" required className="input input-bordered outline-none w-full " />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Your Email</span>
                                            </label>
                                            <input type="text" readOnly name='seller_email' defaultValue={user.email} placeholder="Your Bidding Amount" className="input outline-none input-bordered w-full " />
                                        </div>
                                        <div className="form-control w-full max-w-xs">
                                            <label className="label">
                                                <span className="label-text">Buyer Email</span>
                                            </label>
                                            <input type="email" name='buyer_email' defaultValue={job?.email} readOnly className="input input-bordered outline-none w-full " />
                                        </div>



                                        <div className='mt-4 text-center'>
                                            <button className='text-white rounded-md py-2 px-4 bg-green-500 mr-4'>Bid on the Project</button>
                                        </div>
                                    </div>
                                </form>
                                {/* </div> */}
                            </div>
                        </dialog>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default JobDetails