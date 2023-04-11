import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleCategoryCard from '../SingleCategoryCard/SingleCategoryCard';

const JobCategorys = () => {
    const categorys = useLoaderData();
    // console.log(categorys);
    return (
        <div className=''>
            <div className='text-center lg:mt-28 lg:mb-10 my-6 px-2'>
                <h3 className='text-5xl font-semibold'>Job Category List</h3>
                <p className='text-base mt-5 text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className='grid lg:grid-cols-4 lg:w-full w-2/3 mx-auto gap-5 lg:px-24 lg:py-5'>
                {
                    categorys.length && categorys?.map(singleCategory => <SingleCategoryCard key={singleCategory.id} singleCategory={singleCategory}></SingleCategoryCard>)
                }
            </div>
        </div>
    );
};

export default JobCategorys;