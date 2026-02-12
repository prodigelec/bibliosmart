'use client';

import React from 'react';
import DesktopNavbar from './desktop-navbar';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
    return (
        <header className="relative z-50">
            <div className="hidden md:block">
                <DesktopNavbar />
            </div>
            <div className="md:hidden">
                <MobileNavbar />
            </div>
        </header>
    );
};

export default Navbar;
