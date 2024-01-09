import React, { useState } from 'react';
import Sidebar from './Sidebar/Sidebar';
import Content from './Content/Content';

const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState('home');

    const changeContent = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="Dashboard-container grid grid-cols-[20px,auto] ml-4">
            <Sidebar currentPage={currentPage} changeContent={changeContent} />
            <Content currentPage={currentPage} />
        </div>
    );
};

export default Dashboard;
