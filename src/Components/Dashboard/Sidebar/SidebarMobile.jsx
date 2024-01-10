import React from 'react';
import { MdOutlineLogout } from "react-icons/md";
import { MdNotificationsNone } from "react-icons/md";
import { FiUser } from "react-icons/fi";
import { MdEventNote } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { GoHome } from "react-icons/go";
import { IoMdSearch } from "react-icons/io";
const SidebarMobile = ({ currentPage, changeContent }) => {
    return (
        <div className='flex  justify-between'>
            {/* <div className='flex '> */}
            {/* home to user */}
            <div className='flex  justify-center items-center  gap-10 ml-5'>
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

                <div className={`h-8 w-8  flex justify-center items-center rounded-lg ${currentPage === 'search' ? ' text-white  text-xl  bg-[#4935FF]  flex justify-center items-center rounded-lg' : ''}`}>
                    <IoMdSearch className=" text-lg" onClick={() => changeContent('search')} />
                </div>
            </div>
            {/* home to user ends*/}
            {/* </div> */}
            {/* notify & logout */}
            {/* <div className='flex  gap-5'> */}

            {/* </div> */}
            {/* notify & logout ends*/}
        </div>
    );
};

export default SidebarMobile;