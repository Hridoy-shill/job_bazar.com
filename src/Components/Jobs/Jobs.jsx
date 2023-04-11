import React, { useEffect, useState } from 'react';
import JobData from '../JobData/JobData';

const Jobs = () => {
    const [jobsData, setJobsData] = useState([])
    // console.log(jobsData);
    const [slice, setSlice] = useState(false);
    const [sliceJob, setSliceJob] = useState(jobsData);
    
    useEffect(()=>{
        
        if(slice){
            setSliceJob(jobsData)
        }
        else{
            const jobsQuantity = jobsData.slice(0, 4);
            setSliceJob(jobsQuantity)
        }
    },[slice, jobsData])

    useEffect(() => {
        fetch('/JobsData.json')
            .then(res => res.json())
            .then(data => setJobsData(data))
    }, [])

    return (
        <div>
            <div className='text-center lg:mt-20 lg:mb-5 my-6 px-2'>
                <h3 className='text-5xl font-semibold'>Featured Jobs</h3>
                <p className='text-base mt-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-2 gap-3 lg:px-24 lg:py-5 px-3'>
                {
                    sliceJob.map(job => <JobData key={job.id} job={job}></JobData>)
                }
            </div>
            <div className='text-center mt-10 mb-20'>
                <button onClick={()=>setSlice(!slice)} className='text-white text-lg font-semibold px-2 py-2 rounded bg-gradient-to-r  from-blue-400 to-violet-500'>See All Jobs</button>
            </div>
        </div>
    );
};

export default Jobs;