import React, { useState } from 'react';
import Chart from 'react-apexcharts';
const RadialChart = () => {
    const [chartData, setChartData] = useState({
        options: {
            chart: {
                id: 'apexchart-example'
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            show: false,
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '10px',
                            offsetY: 0,
                        },
                    },

                },
            },
            fill: {
                colors: ['#23D5AA'], // Change the fill color to your desired color
            },
        },
        series: [78],
        series1: [95],
        series2: [59],
    });

    return (
        <div className='flex items-center gap-3 mt-5 md:mt-0'>
            <Chart options={chartData.options} series={chartData.series} type="radialBar" width={100}  height={150} />
            <Chart options={chartData.options} series={chartData.series1} type="radialBar" width={100} height={150} />
            <Chart options={chartData.options} series={chartData.series2} type="radialBar" width={100} height={150} />
        </div>

    );
};

export default RadialChart;
