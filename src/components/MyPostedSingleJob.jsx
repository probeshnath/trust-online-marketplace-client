import React from 'react'

const MyPostedSingleJob = ({job}) => {
    const {_id,category,deadline,description,email,j_title,max_price,min_price} = job;
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
                        <div className="badge badge-outline">Update</div>
                        <div className="badge badge-outline">Delete</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPostedSingleJob