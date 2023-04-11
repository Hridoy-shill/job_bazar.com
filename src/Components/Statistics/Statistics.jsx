
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Line } from 'recharts';

const Statistics = () => {
    const assingmentData =
        [
            { id: 1, name: 'Assingment-1', mark: 60 },
            { id: 2, name: 'Assingment-2', mark: 58 },
            { id: 3, name: 'Assingment-3', mark: 60 },
            { id: 4, name: 'Assingment-4', mark: 59 },
            { id: 5, name: 'Assingment-5', mark: 60 },
            { id: 6, name: 'Assingment-6', mark: 60 },
            { id: 7, name: 'Assingment-7', mark: 60 }
        ]

    return (
        <div className='flex justify-center items-center p-5'>
            <AreaChart width={1000} height={500} data={assingmentData}>
                <Area dataKey="name"></Area>
                <Area stroke='red' dataKey="mark"></Area>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </AreaChart>
        </div>
    );
};

export default Statistics;