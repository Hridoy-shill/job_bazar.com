import React from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';


const AppliedJobs = () => {
    const appliedJobs = JSON.parse(localStorage.getItem('Applied jobs'));
    return (
        <div>
            <div className='bg-gradient-to-r from-blue-50 to-blue-100 h-40'>
                <img className='relative left-3/4 bottom-32' src="https://i.ibb.co/wMxVxxK/Vector-1.png" alt="" />
                <p className='text-3xl font-bold text-center relative bottom-36'>Applied Job</p>
                <img className='relative w-1/5 bottom-56 right-20' src="https://i.ibb.co/why4djG/Vector.png" alt="" />
            </div>
            {
                appliedJobs?.map(job =><AppliedJob key={job.id} job={job}></AppliedJob>)
            }
        </div>
    );
};

export default AppliedJobs;