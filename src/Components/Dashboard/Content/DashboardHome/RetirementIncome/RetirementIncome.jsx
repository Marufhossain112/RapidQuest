import React from 'react';
import RaBarChart from './Charts/Charts';
import { MdArrowDropDown } from "react-icons/md";
import RadialChart from './Charts/RadialChart/RadialChart';


const RetirementIncome = () => {
    return (
        <div className='h-screen w-full mt-10 '>
            <div className='flex flex-col  justify-center px-12 gap-y-5'>

                {/* retirement income */}
                <div>
                    <span className='text-[#4935FF] text-sm font-semibold'>Retirement Income</span> <br />
                    <span className='text-xl '>Starting Year 2056</span>
                </div>
                {/* retirement income ends */}

                {/* goal */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-10'>
                    <div className='relative'>
                        <span className='text-lg font-semibold'>$300,000</span><br />
                        <span className='text-[#6d6a6a] text-sm'>My goal</span>
                        <div className='absolute mt-2 h-[1px] bg-[#4935FF] w-full'></div>
                    </div>
                    <div className='hidden md:block relative'>
                        <span className='text-lg font-semibold'>59%</span><br />
                        <span className='text-[#6d6a6a] text-sm'>Goal Achieved</span>
                        <div className='absolute mt-2 h-[1px] bg-[#4935FF] w-full'></div>
                    </div>
                    <div className='hidden md:block relative'>
                        <span className='text-lg font-semibold'>$300</span><br />
                        <span className='text-[#6d6a6a] text-sm'>Est. Monthly Income</span>
                        <div className='absolute mt-2 h-[1px] bg-[#4935FF] w-full'></div>
                    </div>
                    <div className='md:hidden grid grid-cols-2 gap-5'>
                        <div className='relative'>
                            <span className='text-lg font-semibold'>59%</span><br />
                            <span className='text-[#6d6a6a] text-sm'>Goal Achieved</span>
                            <div className='absolute mt-2 h-[1px] bg-[#4935FF] w-full'></div>
                        </div>
                        <div className='relative'>
                            <span className='text-lg font-semibold'>$300</span><br />
                            <span className='text-[#6d6a6a] text-sm'>Est. Monthly Income</span>
                            <div className='absolute mt-2 h-[1px] bg-[#4935FF] w-full'></div>
                        </div>
                    </div>
                </div>
                {/* goal ends */}


                {/* Contributions */}
                <div className='mt-10'>
                    <div className='flex-col flex gap-y-4'>
                        <span className='text-lg font-medium'>Contributions Overtime</span>
                        <div className='flex gap-4 items-center'>
                            <div className='flex flex-col md:flex-row gap-3 items-start md:items-center'>
                                <div className='h-2 w-3 rounded-lg bg-[#0300A3]'></div>
                                <span className='text-[#6d6a6a]'>Employer:</span>
                                <span className='font-semibold'>K 73,500</span>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 items-start md:items-center'>
                                <div className='h-2 w-3 rounded-lg bg-[#4935FF]'></div>
                                <span className='text-[#6d6a6a]'>Employer:</span>
                                <span className='font-semibold'>K 52,500</span>
                            </div>
                            <div className='flex flex-col md:flex-row gap-3 items-start md:items-center'>
                                <div className='h-2 w-3 rounded-lg bg-[#CDCDCD]'></div>
                                <span className='text-[#6d6a6a]'>Employer:</span>
                                <span className='font-semibold'>K 244,313</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Contributions ends */}

                <div >
                    {/* chart */}
                    <RaBarChart />
                    {/* chart ends */}
                </div>

                {/* compare */}
                <div className='flex-col flex gap-4'>
                    <div className='flex flex-col gap-1'>
                        <span className='text-lg font-semibold'>
                            How to I compare to my peers?
                        </span> <br />
                        <span className='text-[#6d6a6a]'>
                            These numbers present current goal achievement
                        </span>
                    </div>

                    <div className='flex flex-col md:items-center  md:flex-row md:gap-20'>
                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center gap-2 relative'>
                                <span className='font-semibold'>Age:</span><div className='flex items-center'>
                                    <span className='text-sm'>Under 30 </span><MdArrowDropDown />
                                </div>
                                <div className='absolute mt-8 h-[1px] bg-[#d1d0d0] w-full'></div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-semibold relative'>Salary:
                                </span><div className='flex items-center relative'>
                                    <span className='text-sm'>K 20 - K 30 </span><MdArrowDropDown />
                                    <div className='absolute mt-8 h-[1px] bg-[#d1d0d0] w-full'></div>
                                </div>
                            </div>
                            <div className='flex items-center gap-2'>
                                <span className='font-semibold'>Gender:</span><div className='flex items-center'>
                                    <span className='text-sm'>Male </span><MdArrowDropDown />
                                </div>
                            </div>
                            {/* <div></div> */}

                        </div>

                        {/* Radial chart */}
                        <div>
                            <RadialChart />
                        </div>
                        {/* Radial chart ends*/}
                    </div>


                </div>
                {/* compare ends */}


            </div>



        </div >
    );
};

export default RetirementIncome;