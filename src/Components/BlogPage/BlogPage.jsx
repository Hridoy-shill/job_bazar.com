import React from 'react';

const BlogPage = () => {
    return (
        <div className='lg:mx-24 lg:my-10 lg:px-5 mx-10 my-3'>
            <h2 className='text-2xl font-bold'>When should you use context API?</h2>
            <p className='my-3 font-semibold text-slate-500'><span className='font-bold text-black'>Ans:</span> When we needs to access of any specific components state, data, function or methods, on that time generally we used context API.</p>
            <h2 className='text-2xl font-bold'>What is a custom hook?</h2>
            <p className='my-3 font-semibold text-slate-500'><span className='font-bold text-black'>Ans:</span> A custom hook is a JavaScript function that helps to reuse a specific logic or functionality.In two lines, the work of a custom hook is to reuse a specific logic. Hooks are written inside React functional components and defined in a JavaScript file. They can then be used in any other component.</p>
            <h2 className='text-2xl font-bold'>What is useRef?</h2>
            <p className='my-3 font-semibold text-slate-500'><span className='font-bold text-black'>Ans:</span> useRef is a React hook that provides a mutable ref object.It's provide a mutable ref object that stores a value, and the value can be accessed through the re-rendered component.</p>
            <h2 className='text-2xl font-bold'>What is useMemo?</h2>
            <p className='my-3 font-semibold text-slate-500'><span className='font-bold text-black'>Ans:</span> The useMemo is a react hook used in the functional component of react that returns a memoized value.</p>
        </div>
    );
};

export default BlogPage;