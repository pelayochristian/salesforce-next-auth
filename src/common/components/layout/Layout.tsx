import React, { ReactElement } from 'react';
import Footer from './Footer';
import Navbar from './Header';

const Layout = ({ children }: { children: ReactElement }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>

            {/* <Footer /> */}
        </>
    );
};

export default Layout;
