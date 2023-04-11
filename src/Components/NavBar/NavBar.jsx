import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='lg:flex justify-between items-center bg-gradient-to-r from-blue-50 to-blue-100 lg:px-24 lg:py-10 px-10 py-3'>
            <Link to={'/'}>
                <h2 className='text-3xl font-bold'>JOB BAZAR<span className='text-xl font-extralight text-indigo-600'>.COM</span></h2>
            </Link>
            <div className='my-5 lg:my-0'>
                <ul className='lg:flex gap-7'>

                    <li>
                        <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400 text-xl duration-300 font-bold' : 'text-transparent bg-clip-text bg-gradient-to-l  from-blue-400 to-violet-400 font-bold duration-500')}>Home</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/statistics'} className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400 text-xl duration-300 font-bold' : 'text-transparent bg-clip-text bg-gradient-to-l  from-blue-400 to-violet-400 font-bold duration-500')}>Statistics</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/applied'} className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400 text-xl duration-300 font-bold' : 'text-transparent bg-clip-text bg-gradient-to-l  from-blue-400 to-violet-400 font-bold duration-500')}>Applied Jobs</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to={'/blog'} className={({ isActive }) => (isActive ? 'text-transparent bg-clip-text bg-gradient-to-r  from-blue-400 to-violet-400 text-xl duration-300 font-bold' : 'text-transparent bg-clip-text bg-gradient-to-l  from-blue-400 to-violet-400 font-bold duration-500')}>Blog</NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <Link to={'/home'}><button className='text-white text-lg  font-semibold px-2 py-2 rounded bg-gradient-to-r  from-blue-400 to-violet-500'>Star Applying</button></Link>
            </div>
        </div>
    );
};

export default NavBar;