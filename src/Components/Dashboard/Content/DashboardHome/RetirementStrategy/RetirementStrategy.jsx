import React, { useState } from 'react';
import { IoIosArrowForward } from "react-icons/io";
const RetirementStrategy = () => {
    const [sliderValue, setSliderValue] = useState(0);
    const [retirementAge, setRetirementAge] = useState(0);
    return (
        <div className=' h-screen  w-full'>
            <div className='flex flex-col justify-center px-12 mt-10 '>

                {/* Retirement Strategy */}
                <div className='flex flex-col gap-y-3 bg-[#FAFAFA] p-2'>
                    <div>
                        <span className='font-semibold text-lg'>Retirement Strategy</span>
                    </div>

                    {/* <div>
                        <span>Employee Contribution</span>
                        <input type="range" />
                    </div> */}
                    <div>

                    </div>

                    <div className='mb-10'>

                        <div className='flex flex-col'>
                            <span className='text-sm font-semibold mb-3'>Employee Contribution</span>
                            <div className="flex gap-1">
                                <input type="range" onChange={(e) => setSliderValue(e.target.value)} /> <span className='text-neutral-800 text-sm'>{sliderValue}%</span>
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <span className='text-sm font-semibold mb-3'>Retirement Age</span>
                            <div className="flex gap-1">
                                <input type="range" onChange={(e) => setRetirementAge(e.target.value)} /> <span className='text-neutral-800 text-sm'>{retirementAge}</span>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-sm font-semibold mb-3'>Employer Contribution</span>
                        <span className='text-neutral-800 text-sm'>8.4%</span>
                    </div>
                    <div className='flex justify-between'>
                        <span className='text-sm font-semibold mb-3'>Interest Rate</span>
                        <span className='text-neutral-800 text-sm'>5%</span>
                    </div>

                    <div >
                        <button className=' w-full text-center mx-auto gap-1 bg-[#4935FF] text-white px-5 py-2 font-semibold rounded-lg text-sm'>Update
                        </button>
                    </div>
                    <div className=' text-center mx-auto flex items-center'>
                        <span className='text-[#4935FF] text-sm'>View Help Docs
                        </span>
                        <IoIosArrowForward className='text-[#4935FF] text-sm' />
                    </div>
                </div>
                {/* Retirement Strategy ends */}

                {/* Housing Advance */}
                <div className='mt-5 border-l-2 border-[#4935FF] pl-4'>
                    <div className='mb-2'>
                        <span className='text-base font-medium'>Are you considering a </span><br />
                        <span className='font-semibold text-base'>Housing Advance?</span>
                    </div>
                    <span className='mb-3 text-sm'>Limited time reduced interest.</span>
                    <div className='mt-2 text-center mx-auto flex items-center'>
                        <span className='text-[#4935FF] text-sm'>View Help Docs
                        </span>
                        <IoIosArrowForward className='text-[#4935FF] text-sm' />
                    </div>
                </div>
                {/* Housing Advance ends */}
            </div>

        </div>
    );
};

export default RetirementStrategy;