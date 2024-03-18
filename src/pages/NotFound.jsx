import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <>
            <Header />
            <div className='error'>
                <h2>404</h2>
                <p>Oups! La page que vous demandez n'existe pas</p>
                <Link to='/' className='error_Link'>Retournez sur la page d'accueil</Link>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;
