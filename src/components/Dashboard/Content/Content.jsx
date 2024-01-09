import React from 'react';

const Content = ({ currentPage }) => {
    return (
        <div>
            <div >
                {currentPage === 'search' && (
                    <>
                        <h1>Welcome to the Search Page</h1>
                        <p>This is the Search content.</p>
                    </>
                )}
                {currentPage === 'home' && (
                    <>
                        <h1>Welcome to the Home Page</h1>
                        <p>This is the home content.</p>
                    </>
                )}
                {currentPage === 'note' && (
                    <>
                        <h1>note Us</h1>
                        <p>Learn more note our company.</p>
                    </>
                )}
                {currentPage === 'calender' && (
                    <>
                        <h1>calender Us</h1>
                        <p>Get in touch with us.</p>
                    </>
                )}
                {currentPage === 'user' && (
                    <>
                        <h1>user Us</h1>
                        <p>Get in touch with us.</p>
                    </>
                )}
                {currentPage === 'notify' && (
                    <>
                        <h1>notify Us</h1>
                        <p>Get in touch with us.</p>
                    </>
                )}
                {currentPage === 'logout' && (
                    <>
                        <h1>logout Us</h1>
                        <p>Get in touch with us.</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default Content;