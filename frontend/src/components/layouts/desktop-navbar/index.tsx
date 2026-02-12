'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// Sub-components
import NavLink from './components/NavLink';
import NavLogo from './components/NavLogo';
import NavActions from './components/NavActions';
import NavBackground from './components/NavBackground';

const navItems = [
    { href: '/', label: 'Accueil' },
    { href: '/bibliotheque', label: 'Bibliothèque' },
    { href: '/recherche', label: 'Recherche' },
];

const DesktopNavbar = () => {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            className={`hidden md:block fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'h-24' : 'h-[300px] lg:h-[500px]'}`}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
            <NavBackground scrolled={scrolled} />

            <div className={`relative h-24 w-full flex items-center px-8 z-20 transition-all duration-500 ${scrolled ? 'bg-[var(--color-background-layout)]/90 backdrop-blur-xl shadow-2xl border-b border-[var(--accent)]/20' : 'bg-[var(--color-background-layout)]/30 backdrop-blur-md'}`}>
                <div className="container mx-auto flex justify-around">
                    <NavLogo />

                    <div className="flex items-center gap-5">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.href}
                                {...item}
                                isActive={pathname === item.href}
                            />
                        ))}
                    </div>

                    <NavActions />
                </div>
            </div>
        </motion.nav>
    );
};

export default DesktopNavbar;
