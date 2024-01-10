import React from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


const data = [
    {
        "name": "20",
        "uv": 400,
        "pv": 2400
    },
    {
        "name": "25",
        "uv": 3000,
        "pv": 1398
    },
    {
        "name": "30",
        "uv": 2000,
        "pv": 9800
    },
    {
        "name": "35",
        "uv": 2780,
        "pv": 3908
    },
    {
        "name": "40",
        "uv": 1890,
        "pv": 4800
    },
    {
        "name": "45",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "50",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "55",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "60",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "65",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "70",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "75",
        "uv": 2390,
        "pv": 3800
    },
    {
        "name": "80",
        "uv": 3490,
        "pv": 4300
    }
];

const RaBarChart = () => (
    <div>
        <ResponsiveContainer width={"100%"} aspect={3}>
            <BarChart
                // barGap={34}
                width={200}
                height={200}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 " />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                {/* <Legend /> */}
                <Bar width={20}
                    height={20} dataKey="uv" stackId="a" fill="#0300A3" />
                <Bar width={20}
                    height={20} dataKey="uv" stackId="a" fill="#4935FF" />
                <Bar width={20}
                    height={20} barSize={8} dataKey="uv" stackId="a" fill="#85AFFF" />
            </BarChart>







        </ResponsiveContainer>
    </div>
);

export default RaBarChart;
