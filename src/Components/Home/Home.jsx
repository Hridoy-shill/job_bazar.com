import React from 'react';
import { Link, } from 'react-router-dom';
import JobCategorys from '../JobCategorys/JobCategorys';
import Jobs from '../Jobs/Jobs';

const Home = () => {
    
    return (
        <div>
            <div className='grid lg:grid-cols-2 gap-5 bg-gradient-to-r from-blue-50 to-blue-100 lg:px-24 lg:py-5 px-10 py-3 '>
                <div className='relative lg:top-14'>
                    <p className='text-6xl font-bold leading-tight'>One Step <br /> Closer To Your <br /><span className='text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400'> Dream Job</span></p>
                    <p className='text-gray-500 my-5'>Explore thousands of job opportunities with all the <br /> information you need. Its your future. Come find it. Manage all <br /> your job application from start to finish.</p>
                    <Link to={''}><button className='text-white text-lg font-semibold px-2 py-2 rounded bg-gradient-to-r  from-blue-400 to-violet-500'>Get Started</button></Link>
                </div>
                <div className=''>
                    <img className='relative lg:top-5 lg:left-12 top-3 left-8' src="https://i.ibb.co/YXT8sMy/P3-OLGJ1-copy-1.png" alt="" />
                </div>
            </div>

            <div>
                <JobCategorys></JobCategorys>
            </div>

            <div>
                <Jobs></Jobs>
            </div>
        </div>
    );
};

export default Home;