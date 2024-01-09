import React from 'react';
import DashboardHome from './DashboardHome/DashboardHome';

const Content = ({ currentPage }) => {
    return (
        <div>
            <div >
                {currentPage === 'search' && (
                    <div className='h-screen w-full flex justify-center items-center'>
                        <p className='text-xl font-semibold italic'>Coming soon...</p>
                    </div>
                )}
                {currentPage === 'home' && (
                    <DashboardHome />
                )}
                {currentPage === 'note' && (
                    <div className='h-screen w-full flex justify-center items-center'>
                        <p className='text-xl font-semibold italic'>Coming soon...</p>
                    </div>
                )}
                {currentPage === 'calender' && (
                    <div className='h-screen w-full flex justify-center items-center'>
                        <p className='text-xl font-semibold italic'>Coming soon...</p>
                    </div>
                )}
                {currentPage === 'user' && (
                    <div className='h-screen w-full flex justify-center items-center'>
                        <p className='text-xl font-semibold italic'>Coming soon...</p>
                    </div>
                )}
                {currentPage === 'notify' && (
                    <div className='h-screen w-full flex justify-center items-center'>
                        <p className='text-xl font-semibold italic'>Coming soon...</p>
                    </div>
                )}
                {currentPage === 'logout' && (
                    <div className='h-screen w-full flex justify-center items-center'>
                        <p className='text-xl font-semibold italic'>Coming soon...</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Content;