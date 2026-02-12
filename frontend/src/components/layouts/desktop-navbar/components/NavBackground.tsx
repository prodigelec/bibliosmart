'use client';

import React from 'react';
import Image from 'next/image';

interface NavBackgroundProps {
    scrolled: boolean;
}

const NavBackground = ({ scrolled }: NavBackgroundProps) => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Image
            src="/hero_navbar.png"
            alt="BiblioSmart Library"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className={`transition-all duration-1000 ${scrolled ? 'scale-105 blur-lg opacity-20' : 'scale-100 opacity-100'}`}
        />
    </div>
);

export default NavBackground;
