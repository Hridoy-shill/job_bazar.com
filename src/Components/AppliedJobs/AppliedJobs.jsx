import React, { useEffect, useState } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';



const AppliedJobs = () => {

    const [jobs, setJobs] = useState([]) 

    const handleRemote = (jobType) =>{
        const appliedJobs = JSON.parse(localStorage.getItem('Applied jobs'));
        const remote = appliedJobs.filter(job => job.jobCategory == jobType)
        setJobs(remote);
    }

    const handleOnsite = (jobType) =>{
        const appliedJobs = JSON.parse(localStorage.getItem('Applied jobs'));
        const onSite = appliedJobs.filter(job => job.jobCategory == jobType)
        setJobs(onSite);
    }

    useEffect(()=>{
        const appliedJobs = JSON.parse(localStorage.getItem('Applied jobs'));
        console.log(appliedJobs);
        if(appliedJobs){
            setJobs(appliedJobs)
        }
    },[])
    return (
        <div>

            <div className='bg-gradient-to-r from-blue-50 to-blue-100 h-40'>
                <img className='relative left-3/4 bottom-32' src="https://i.ibb.co/wMxVxxK/Vector-1.png" alt="" />
                <p className='text-3xl font-bold text-center relative bottom-36'>Applied Job</p>
                <img className='relative w-1/5 bottom-56 right-20' src="https://i.ibb.co/why4djG/Vector.png" alt="" />
            </div>

            
            <div className="dropdown flex flex-col items-end lg:mx-24 lg:my-10 lg:px-5 mx-10 my-3">
                <label tabIndex={0} className="border-2 text-xl shadow-lg font-semibold px-3 py-2">Filter By</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 rounded-box w-52">
                    <li><a onClick={()=> handleRemote('remote')} className='font-semibold'>Remote</a></li>
                    <li><a onClick={()=>handleOnsite('onsite')} className='font-semibold'>Onsite</a></li>
                </ul>
            </div>

            {
               jobs?.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;