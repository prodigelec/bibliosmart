'use client';

import React from 'react';
import { motion } from 'framer-motion';

const NavActions = () => (
    <div className="flex items-center gap-4">
        <motion.button
            className="px-6 py-2.5 text-[var(--accent)] font-bold text-xs uppercase tracking-wider hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            Connexion
        </motion.button>

        <motion.button
            className="px-6 py-2.5 text-[var(--accent)] font-bold text-xs uppercase tracking-wider hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
        >
            Inscription
        </motion.button>
    </div>
);

export default NavActions;
