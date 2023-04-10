import React from 'react';

const JobData = ({ job }) => {
    console.log(job);

    const { id, companyLogo, jobTitle, companyName, jobCategory, location, salary, jobType } = job;

    return (
        <div className='text-center p-5 shadow-lg rounded-lg'>
            <img className='w-40 mx-auto' src={companyLogo} alt="" />
            <p className='text-xl font-bold'>{jobTitle}</p>
            <p className='text-zinc-500 font-semibold my-2'>{companyName}</p>
            <div className='flex justify-center my-2'>
                <p className='border-2 border-indigo-300 rounded p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400'>{jobCategory}</p>
                <p className='border-2 border-indigo-300 rounded p-1 font-bold ms-2 text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400'>{jobType}</p>
            </div>
            <div className='flex-row justify-center'>
                <p className='font-bold text-gray-700 mb-2'>{location}</p>
                <p className='font-bold text-gray-700 mb-5'>Salary: {salary}</p>
            </div>
            <button className='text-white text-lg font-semibold px-2 py-2 rounded bg-gradient-to-r  from-blue-400 to-violet-500'>View Details</button>
        </div>
    );
};

export default JobData;