import React from 'react';

const SingleCategoryCard = ({singleCategory}) => {
    console.log(singleCategory);
    const {quantity, category, image} = singleCategory;
    return (
        <div className='bg-gradient-to-r from-blue-100 to-blue-200  px-5 py-8 rounded text-center lg:text-left'>
            <img className='mx-auto lg:mx-0' src={image} alt="" />
            <p className='mt-4 mb-2 text-xl font-bold'>{category}</p>
            <p className='text-gray-500 '>{quantity} Jobs Available</p>
        </div>
    );
};

export default SingleCategoryCard;