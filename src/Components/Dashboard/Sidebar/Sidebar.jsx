import React from 'react';
import { MdOutlineLogout } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdEventNote } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
import { GiButterfly } from "react-icons/gi";
const Sidebar = ({ currentPage, changeContent }) => {
    return (
        <div className='min-h-screen flex flex-col justify-between'>
            <div className='flex flex-col gap-10'>
                {/* logo & search */}
                <div className='flex flex-col gap-5'>
                    <div className={`h-8 w-8  flex justify-center items-center rounded-lg $`}>
                        <GiButterfly className=" text-lg" />
                    </div>

                    <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'search' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                        <IoMdSearch className=" text-lg" onClick={() => changeContent('search')} />
                    </div>
                </div>
                {/* logo & search ends*/}

                {/* home to user */}
                <div className='flex flex-col gap-5'>
                    <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'home' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                        <GoHome className=" text-lg" onClick={() => changeContent('home')} />
                    </div>

                    <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'note' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                        <MdEventNote className=" text-lg" onClick={() => changeContent('note')} />
                    </div>
                    <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'calender' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                        <SlCalender className=" text-lg" onClick={() => changeContent('calender')} />
                    </div>
                    <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'user' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                        <FiUser className=" text-lg" onClick={() => changeContent('user')} />
                    </div>

                </div>
                {/* home to user ends*/}
            </div>
            {/* notify & logout */}
            <div className='flex flex-col gap-5'>
                <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'notify' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                    <MdNotificationsNone className=" text-lg" onClick={() => changeContent('notify')} />
                </div>
                <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'logout' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                    <MdOutlineLogout className=" text-lg" onClick={() => changeContent('logout')} />
                </div>
            </div>
            {/* notify & logout ends*/}
        </div>
    );
};

export default Sidebar;