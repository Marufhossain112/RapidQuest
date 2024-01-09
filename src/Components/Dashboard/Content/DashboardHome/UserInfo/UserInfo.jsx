import React from 'react';
import { MdArrowDropDown } from "react-icons/md";
const UserInfo = () => {
    return (
        <div className=' h-screen bg-[#FAFAFA] w-full'>
            <div className='flex flex-col justify-center px-12'>

                {/* user image & name */}
                <div className='flex items-center gap-5 my-10'>
                    <div >
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="user" height={70} width={70} className='rounded-full' />
                    </div>
                    <div>
                        <span className='font-normal text-2xl'>Hi Mike,</span> <br />
                        <span className='text-sm text-[#2c2b2b]'>Welcome back</span>
                    </div>
                </div>
                {/* user image & name ends*/}

                {/* Today */}
                <div className='flex flex-col gap-y-3'>
                    <div>
                        <span className='font-semibold '>Today</span>
                    </div>


                    <div className='flex flex-col'>
                        <span className='text-xl font-semibold'>$19,892</span>
                        <span className='text-[#6d6a6a]'>Account Balance</span>
                    </div>
                    <div className='flex flex-col '>
                        <span className='font-semibold text-sm'>$4,000</span>
                        <span className='text-[#6d6a6a]'>Year-to-Date Contributions</span>
                    </div>
                    <div className='flex flex-col '>
                        <span className='font-semibold text-sm'>$1,892</span>
                        <span className='text-[#6d6a6a]'>Total Interest</span>
                    </div>

                    <div >
                        <button className='flex items-center gap-1 bg-[#4935FF] text-white px-5 py-2 font-semibold rounded-lg text-sm'>I want to
                            <MdArrowDropDown className='font-semibold' />
                        </button>
                    </div>
                </div>
                {/* Today ends */}

                {/* Transaction */}
                <div className='flex flex-col gap-5 mt-5'>
                    <div>
                        <span className='font-semibold text-base'>Recent Transactions</span>
                    </div>
                    <div>
                        <span className='text-[#6d6a6a] text-sm'>2020-08-07</span> <br />
                        <span className='text-sm font-semibold'>Withdrawal Transfer To Bank-XXX11</span>
                    </div>
                    <div>
                        <span className='text-[#6d6a6a] text-sm'>2020-08-07</span> <br />
                        <span className='text-sm font-semibold'>Withdrawal Transfer To Bank-XXX11</span>
                    </div>
                    <div>
                        <span className='text-[#6d6a6a] text-sm'>2020-08-07</span> <br />
                        <span className='text-sm font-semibold'>Withdrawal Transfer To Bank-XXX11</span>
                    </div>

                </div>
                {/* Transaction ends */}

            </div>

        </div>
    );
};

export default UserInfo;