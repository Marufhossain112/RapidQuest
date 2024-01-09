import React from 'react';
import UserInfo from './UserInfo/UserInfo';
import RetirementIncome from './RetirementIncome/RetirementIncome';
import RetirementStrategy from './RetirementStrategy/RetirementStrategy';

const DashboardHome = () => {
    return (
        <div>
            <UserInfo />
            <RetirementIncome />
            <RetirementStrategy />
        </div>
    );
};

export default DashboardHome;