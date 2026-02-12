'use client';

import React from 'react';
import Link from 'next/link';

const NavLogo = () => (
    <Link href="/" className="flex items-center gap-3 group">
        <div className="flex flex-col">
            <span className="text-2xl font-playfair font-bold text-white tracking-tight leading-none drop-shadow-lg transition-colors duration-300 group-hover:text-[var(--accent)]">
                Biblio<span className="text-[var(--accent)]">Smart</span>
            </span>
            <span className="text-[8px] uppercase tracking-[0.2em] text-white/60 font-medium">
                Intelligence Littéraire
            </span>
        </div>
    </Link>
);

export default NavLogo;
