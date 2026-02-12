'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface NavLinkProps {
    href: string;
    label: string;
    isActive: boolean;
}

const NavLink = ({ href, label, isActive }: NavLinkProps) => (
    <Link href={href} className="relative px-6 py-2 group">
        <span className={`
            text-sm font-semibold tracking-wide transition-all duration-300 uppercase
            ${isActive ? 'text-[var(--accent)]' : 'text-white/90 group-hover:text-[var(--accent)]'}
        `}>
            {label}
        </span>

        {isActive && (
            <motion.div
                layoutId="activeNav"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
                initial={false}
                transition={{ duration: 0.3 }}
            >
                <div className="absolute inset-0 blur-sm bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
            </motion.div>
        )}

        <div className={`
            absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[var(--accent)]
            transition-all duration-300
            ${!isActive && 'group-hover:w-full'}
        `} />
    </Link>
);

export default NavLink;
