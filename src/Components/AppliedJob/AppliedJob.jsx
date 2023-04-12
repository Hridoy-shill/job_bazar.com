import React from 'react';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

const AppliedJob = ({ job }) => {
    const { id, educationalRequirements, email, experiences, jobDescription, jobResponsibility, phone, salary, location, jobTitle, companyLogo, companyName, jobCategory, jobType } = job;
    return (
        <div className='flex justify-between items-center shadow-lg lg:mx-24 lg:my-10 lg:px-5 mx-10 my-3'>
            <div className='grid grid-cols-3 items-center'>
                <img className='w-60' src={companyLogo} alt="" />
                <div className='col-span-2 ms-3'>
                    <p className='text-lg font-bold'>{jobTitle}</p>
                    <p className='font-semibold text-gray-500 my-2'>{companyName}</p>
                    <div className='flex mb-2'>
                        <p className='border-2 border-indigo-300 rounded p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400 mr-3'>{jobCategory}</p>
                        <p className='border-2 border-indigo-300 rounded p-1 font-bold text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400'>{jobType}</p>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex items-center mr-6'>
                            <MapPinIcon className='w-6 h-6 text-gray-500'></MapPinIcon>
                            {location}
                        </div>
                        <div className='flex items-center'>
                            <CurrencyDollarIcon className='w-6 h-6 text-gray-500'></CurrencyDollarIcon>
                            {salary}
                        </div>
                    </div>
                </div>
            </div>
            
            <Link to={`/job/${id}`}>
            <button className='text-white text-lg font-semibold px-2 py-2 rounded bg-gradient-to-r h-12 from-blue-400 to-violet-500'>View Details</button>
            </Link>
        </div>
    );
};

export default AppliedJob;