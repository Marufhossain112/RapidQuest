import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';
import SidebarMobile from './Sidebar/SidebarMobile';
import { MdNotificationsNone } from 'react-icons/md';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const changeContent = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="Dashboard-container md:grid md:grid-cols-[20px,auto] ml-4 gap-5">
            <div className='hidden md:block'>
                <Sidebar currentPage={currentPage} changeContent={changeContent} />
            </div>

            <div className=' md:hidden flex justify-end pr-10'>
                <div className={`h-8 w-8  flex justify-end items-end rounded-lg ${currentPage === 'notify' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                    <MdNotificationsNone className=" text-lg" onClick={() => changeContent('notify')} />
                </div>
            </div>
            <Content currentPage={currentPage} />
            <div className='block md:hidden'>
                <SidebarMobile currentPage={currentPage} changeContent={changeContent} />
            </div>
        </div>
    );
};

export default Dashboard;
