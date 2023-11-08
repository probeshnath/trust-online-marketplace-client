import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Job from './Job'


const BrowseJobsByCategory = () => {
    const allJobs = useLoaderData();
    const [jobs, setJobs] = useState(allJobs)
    const [category, setCategory] = useState()

    // pagination
    // const count = jobs?.length;
    // const itemsPerPage = 2;
    // const totalPage = Math.ceil(count / itemsPerPage)
    // const [currentPage, setCurrentPage] = useState(0)
    // console.log("totalPage",totalPage)

    // const pages = [...Array(totalPage).keys()];

    // for( let i = 0; i < totalPage; i++ ){
    //     pages.push(i)
    // }
    // console.log(pages)


    // console.log("category", category)

    useEffect(()=>{
        // let cate = {category : category}
        // console.log("category",cate)
       if(category){
        axios.get(`https://market-place-server-mern.vercel.app/jobs?category=${category}`,)
        .then(res =>{
            console.log("cate",res.data)
            setJobs(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
       }else{
        setJobs(allJobs)
       }

    },[category])
    return (
        <div className='bg-gray-200 py-5'>

            <Tabs className='max-w-7xl mx-auto'>
                <TabList className="flex justify-center flex-wrap items-center py-5 font-bold gap-3">
                    <Tab onClick={()=> setJobs(allJobs)} className="bg-orange-700 py-1 rounded-md px-2 text-white" >All</Tab>
                    <Tab onClick={()=> setCategory("Web Development")} className="bg-orange-700 py-1 rounded-md px-2 text-white">Web Development</Tab>
                    <Tab onClick={()=> setCategory("Graphics Design")} className="bg-orange-700 py-1 rounded-md px-2 text-white">Graphics Design</Tab>
                    <Tab onClick={()=> setCategory("Digital Marketing")} className="bg-orange-700 py-1 rounded-md px-2 text-white" >Digital Marketing</Tab>
                </TabList>

                <TabPanel>
                    <h2 className='py-5 text-center text-3xl font-bold text-green-700 '>All <span className='text-orange-600'>Jobs</span></h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-3'>
                        {
                            jobs && jobs.map((job)=>(
                                <Job key={job._id} job={job} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <h2 className='py-5 text-center text-3xl font-bold text-green-700 '>Web Development <span className='text-orange-600'>Jobs</span></h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-3'>
                        {
                            jobs && jobs.map((job)=>(
                                <Job key={job._id} job={job} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <h2 className='py-5 text-center text-3xl font-bold text-green-700 '>Graphics Design <span className='text-orange-600'>Jobs</span></h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-3'>
                        {
                            jobs && jobs.map((job)=>(
                                <Job key={job._id} job={job} />
                            ))
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                <h2 className='py-5 text-center text-3xl font-bold text-green-700 '>Digital Marketing <span className='text-orange-600'>Jobs</span></h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-3'>
                        {
                            jobs && jobs.map((job)=>(
                                <Job key={job._id} job={job} />
                            ))
                        }
                    </div>
                </TabPanel>

                {/* <div className='py-5 text-center'>
                    <p>current page : {currentPage}</p>
                    {
                        pages.map(page => <button onClick={()=> setCurrentPage(page)} className={currentPage === page ? 'btn bg-orange-400 py-0 mr-2' : "bg-green-600 btn py-0 mr-2" } } key={page}> {page} </button>)
                    }
                </div> */}
                
            </Tabs>



        </div>
    )
}

export default BrowseJobsByCategory