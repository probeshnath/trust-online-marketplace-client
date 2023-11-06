import React from 'react'
import { Link } from 'react-router-dom';

const MyPostedSingleJob = ({ job, handleDelete }) => {
    const { _id, category, deadline, description, email, j_title, max_price, min_price } = job;



    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">
                        {j_title}
                    </h2>
                    <div className="badge badge-secondary">{category}</div>
                    <p>{description}</p>
                    <div>
                        <p>{deadline}</p>
                        <p>${min_price}-${max_price}</p>
                    </div>
                    <div className="card-actions justify-end">

                        <Link to={`/update/${_id}`} ><div className="badge badge-outline">Update</div></Link>
                        {/* <div onClick={() => handleDelete(_id)} className="badge cursor-pointer badge-outline">Delete</div> */}

                        {/* The button to open modal */}
                        <label htmlFor="my_modal_6" className="btn cursor-pointer ">Delete</label>

                        {/* Put this part before </body> tag */}
                        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Hello!</h3>
                                <p className="py-4">This modal works with a hidden checkbox!</p>
                                <div className="modal-action">
                                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                                    <label htmlFor="my_modal_6" onClick={() => handleDelete(_id)}  className="btn">Yes</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPostedSingleJob