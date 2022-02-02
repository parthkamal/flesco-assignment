import React from 'react';

import {
    LineChart,
    ResponsiveContainer,
    Legend, Tooltip,
    Line,
    XAxis,
    YAxis,
    CartesianGrid
} from 'recharts';
  
const pdata = [
    {
        week: 'week1',
        deployment: 11,
    },
    {
        week: 'week2',
        deployment: 15,
    },
    {
        week: 'week3',
        deployment: 5,
    },
    {
        week: 'week4',
        deployment: 10,
    },
    {
        week: 'week5',
        deployment: 9,
    },
    {
        week: 'week6',
        deployment: 10,
    },
];
  
function Example() {
    return (
        <div>
            <h1 className="text-heading">
               Deployment
            </h1>
            <ResponsiveContainer width="80%" height="100%" aspect={5} className={'chart'}>
                <LineChart data={pdata} >
                    <CartesianGrid />
                    <XAxis dataKey="week" 
                         tick={{fill:'#fff'}}/>
                    <YAxis dataKey="deployment" tick={{fill:'#fff'}}></YAxis>
                    <Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={true}/>
                    <Line dataKey="deployment" type={'monotone'}
                        stroke="white" strokeWidth={5}  dot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 2,r:5}} 
                        activeDot={{fill:"#2e4355",stroke:"#8884d8",strokeWidth: 5,r:10}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
  
export default Example;