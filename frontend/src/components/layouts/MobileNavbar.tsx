'use client';


import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Search, User, Home, BookOpen } from 'lucide-react';

const navItems = [
    { href: '/', label: 'Accueil', icon: Home },
    { href: '/bibliotheque', label: 'Livres', icon: BookOpen },
    { href: '/recherche', label: 'Chercher', icon: Search },
    { href: '/profil', label: 'Moi', icon: User },
];

const MobileNavbar = () => {
    const pathname = usePathname();

    return (
        <nav className="md:hidden fixed bottom-0 left-0 w-full h-20 bg-[var(--color-background-layout)]/90 backdrop-blur-2xl border-t border-[var(--accent)]/20 px-2 z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.3)]">
            <div className="flex justify-around items-center w-full h-full pb-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;

                    return (
                        <Link key={item.href} href={item.href} className="relative py-2 px-4 group">
                            <motion.div
                                className={`flex flex-col items-center gap-1.5 transition-all duration-500`}
                                whileTap={{ scale: 0.9 }}
                            >
                                <div className={`
                                    relative p-2 rounded-2xl transition-all duration-500
                                    ${isActive
                                        ? 'bg-[var(--accent)] text-[var(--color-background-layout)] shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                                        : 'text-white/40 hover:text-white/70'}
                                `}>
                                    <Icon
                                        size={24}
                                        strokeWidth={isActive ? 2.5 : 2}
                                        className="relative z-10"
                                    />
                                    {isActive && (
                                        <motion.div
                                            layoutId="navGlow"
                                            className="absolute inset-0 bg-[var(--accent)] rounded-2xl blur-md opacity-50"
                                            initial={false}
                                        />
                                    )}
                                </div>

                                <span className={`
                                    text-[10px] font-black uppercase tracking-[0.15em] transition-all duration-500
                                    ${isActive ? 'text-[var(--accent)] opacity-100 translate-y-0' : 'text-white/30 opacity-0 translate-y-1'}
                                `}>
                                    {item.label}
                                </span>
                            </motion.div>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default MobileNavbar;
