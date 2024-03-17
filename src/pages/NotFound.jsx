import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='error'>
                <h2>Page Not Found</h2>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
