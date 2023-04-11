import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams, } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon, BriefcaseIcon, PhoneIcon, EnvelopeIcon, } from '@heroicons/react/24/solid'

const JobDetails = () => {
    const value = useParams()
    console.log(value);

    const [jobData, setJobData] = useState([]);
    const [job, setJob] = useState([])

    useEffect(() => {
        fetch('/JobsData.json')
            .then(res => res.json())
            .then(data => setJobData(data))
    }, [])
    // console.log(jobData);

    useEffect(() => {
        setJob(jobData.find(job => job.id == value.id))
    }, [value.id, jobData])
    console.log(job);


    const handleAppliedJob = (id) =>{
        console.log('clicked');
        localStorage.setItem('Applied', JSON.stringify(id));
    }

    const { id, educationalRequirements, email, experiences, jobDescription, jobResponsibility, phone, salary, location, jobTitle } = job || {};

    return (
        <div>
            <div className='bg-gradient-to-r from-blue-50 to-blue-100 h-40'>
                <img className='relative left-3/4 bottom-32' src="https://i.ibb.co/wMxVxxK/Vector-1.png" alt="" />
                <p className='text-3xl font-bold text-center relative bottom-36'>Job Details</p>
                <img className='relative w-1/5 bottom-56 right-20' src="https://i.ibb.co/why4djG/Vector.png" alt="" />
            </div>

            <div className='grid lg:grid-cols-3 gap-5 mt-10 lg:px-24 lg:py-10 px-10 py-3'>
                <div className='col-span-2'>
                    <p className='text-sm mb-5 font font-semibold text-slate-600'><span className='font-bold text-sm text-black mr-2'>Job Description:</span>{jobDescription}</p>
                    <p className='text-sm mb-5 font font-semibold text-slate-600'><span className='font-bold text-sm  text-black mr-2'>Job Responsibility:</span>{jobResponsibility}</p>
                    <p className='text-sm mb-5 font font-semibold text-slate-600'><span className='font-bold text-sm text-black mr-2'>Educational Requirements:</span><br />{educationalRequirements}</p>
                    <p className='text-sm mb-5 font font-semibold text-slate-600'><span className='font-bold text-sm  text-black mr-2'>Experiences:</span><br />{educationalRequirements}</p>
                </div>
                <div className='border-2 bg-gradient-to-r from-indigo-100 to-blue-200 p-4 rounded'>
                    <h3 className='border-b-2 font-bold border-zinc-700 mb-5'>Job Details</h3>
                    <div className='flex items-center my-2'>
                        <CurrencyDollarIcon className='h-5 w-5 text-gray-600'></CurrencyDollarIcon>
                        <p>{salary}</p>
                    </div>
                    <div className='flex items-center mb-5'>
                        <BriefcaseIcon className='h-5 w-5 text-gray-600'></BriefcaseIcon>
                        <p>Job Title: {jobTitle}</p>
                    </div>
                    <h3 className='border-b-2 font-bold border-zinc-700 mb-5'>Contact Information</h3>
                    <div className='flex items-center my-2'>
                        <PhoneIcon className='h-5 w-5 text-gray-600'></PhoneIcon>
                        <p>Phone: {phone}</p>
                    </div>
                    <div className='flex items-center mb-2'>
                        <EnvelopeIcon className='h-5 w-5 text-gray-600'></EnvelopeIcon>
                        <p>Email: {email}</p>
                    </div>
                    <div className='flex items-center'>
                        <MapPinIcon className='h-5 w-5 text-gray-600'></MapPinIcon>
                        <p>Address: {location}</p>
                    </div>
                    <button onClick={()=>handleAppliedJob(id)} className='w-full text-white text-lg mt-5 font-semibold px-2 py-2 rounded bg-gradient-to-r  from-blue-400 to-violet-500'>Apply Now</button>

                </div>
            </div>
        </div>
    );
};

export default JobDetails;