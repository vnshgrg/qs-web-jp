import React from 'react';
import Header from '../header';
import Footer from '../footer';
import { Hero } from '../../components';

const mainLayout = ({ children }) => {
    return (
        <>
            <Header>
                <Hero />
            </Header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default mainLayout;
