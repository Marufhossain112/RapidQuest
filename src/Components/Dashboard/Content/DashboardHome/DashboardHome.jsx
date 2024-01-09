import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import RetirementIncome from './RetirementIncome/RetirementIncome';
import RetirementStrategy from './RetirementStrategy/RetirementStrategy';

const DashboardHome = () => {
    return (
        <div className='grid grid-cols-[350px,auto,300px]'>
            <UserInfo />
            <RetirementIncome />
            <RetirementStrategy />
        </div>
    );
};

export default DashboardHome;