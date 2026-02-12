'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, Compass, ArrowRight, Instagram, Twitter, Mail } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-[var(--accent)]" />,
    title: "Gestion Intelligente",
    description: "Organisez votre collection avec une précision chirurgicale grâce à notre IA."
  },
  {
    icon: <Sparkles className="w-6 h-6 text-[var(--accent)]" />,
    title: "Recommandations",
    description: "Découvrez votre prochain coup de cœur basé sur vos habitudes de lecture."
  },
  {
    icon: <Compass className="w-6 h-6 text-[var(--accent)]" />,
    title: "Exploration",
    description: "Naviguez à travers des milliers d'ouvrages indexés pour vous."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] pb-24 md:pb-0">
      {/* Hero Spacer - Responsive height */}
      <div className="h-[180px] md:h-[300px] lg:h-[500px] w-full" />

      {/* Intro Hero Section */}
      <section className="relative px-6 md:px-12 py-12 md:py-24 -mt-10 md:-mt-20 z-10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="max-w-4xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-playfair font-bold text-[var(--primary)] leading-[1.1]">
              Redéfinissez votre <br />
              <span className="text-[var(--accent)] italic">Bibliothèque.</span>
            </h1>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl leading-relaxed">
              L'élégance rencontre l'intelligence. BiblioSmart transforme la façon dont vous collectionnez, lisez et partagez votre passion pour les livres.
            </p>

            <div className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 md:gap-6">
              <Link href="/bibliotheque" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 bg-[var(--primary)] text-white rounded-xl font-bold tracking-wide shadow-xl shadow-[var(--primary)]/20 hover:bg-[var(--primary-dark)] transition-all"
                  whileHover={{ y: -4, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Commencer l'aventure
                </motion.button>
              </Link>
              <Link href="/recherche" className="w-full sm:w-auto">
                <motion.button
                  className="w-full sm:w-auto px-8 py-4 border-2 border-[var(--primary)] text-[var(--primary)] rounded-xl font-bold tracking-wide flex items-center justify-center gap-2 hover:bg-[var(--primary)]/5 transition-all"
                  whileHover={{ y: -4 }}
                >
                  Explorer le catalogue <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-[var(--surface-elevated)]/30 backdrop-blur-sm border-y border-[var(--surface)]">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-8 md:p-10 rounded-3xl bg-white border border-[var(--surface)] shadow-sm hover:shadow-xl hover:border-[var(--accent)]/30 transition-all duration-500 group"
                variants={itemVariants}
              >
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[var(--accent)]/10 rounded-2xl flex items-center justify-center transition-all group-hover:bg-[var(--accent)] group-hover:text-white group-hover:rotate-6 text-[var(--accent)]">
                  {feature.icon}
                </div>
                <h3 className="mt-6 md:mt-8 text-xl md:text-2xl font-bold text-[var(--primary)]">{feature.title}</h3>
                <p className="mt-4 text-[var(--text-muted)] leading-relaxed text-base md:text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Aesthetic Showcase Section */}
      <section className="py-20 md:py-40 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <motion.div
              className="w-full lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="absolute inset-0 bg-[var(--accent)]/20 blur-3xl rounded-full -rotate-12 translate-x-12" />
              <div className="relative aspect-square max-w-md mx-auto lg:max-w-none rounded-full border-[10px] md:border-[20px] border-white shadow-2xl overflow-hidden ring-1 ring-black/5">
                <Image
                  src="/hero_navbar.png"
                  alt="Showcase"
                  fill
                  className="object-cover scale-110"
                />
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="uppercase tracking-[0.4em] text-[var(--accent)] font-bold text-xs md:text-sm">L'Art de Lire</span>
              <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-playfair font-bold text-[var(--primary)] leading-tight">
                Une Expérience <br />
                <span className="italic">Sans Précédent.</span>
              </h2>
              <p className="mt-8 md:mt-10 text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-xl mx-auto lg:mx-0">
                Finies les listes interminables et les dossiers encombrants. BiblioSmart crée un écrin digital pour vos ouvrages, mettant en valeur chaque livre comme une œuvre d'art unique.
              </p>
              <div className="mt-10 md:mt-12 h-1 w-24 bg-[var(--accent)] mx-auto lg:mx-0" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 bg-[var(--primary)] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero_navbar.png"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-playfair font-bold tracking-tight">Prêt à réinventer votre bibliothèque ?</h2>
            <p className="mt-6 md:mt-8 text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
              Rejoignez des milliers de passionnés de lecture qui ont déjà fait le choix de l'excellence digitale.
            </p>
            <motion.button
              className="mt-10 md:mt-12 px-10 md:px-12 py-4 md:py-5 bg-[var(--accent)] text-[var(--primary)] rounded-full font-bold text-lg shadow-2xl shadow-[var(--accent)]/40 hover:scale-105 transition-all"
              whileHover={{ y: -5 }}
            >
              Inscrivez-vous maintenant
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="py-16 md:py-24 bg-[var(--background)] border-t border-[var(--surface)] px-6 md:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            <div className="col-span-1 md:col-span-2">
              <span className="text-3xl font-playfair font-bold text-[var(--primary)]">Biblio<span className="text-[var(--accent)]">Smart</span></span>
              <p className="mt-6 text-[var(--text-muted)] max-w-sm leading-relaxed">
                L'intelligence artificielle au service de votre passion pour la lecture. Redécouvrez votre collection personnelle avec élégance.
              </p>
              <div className="flex gap-5 mt-8 text-[var(--primary)]">
                <Instagram size={20} className="hover:text-[var(--accent)] cursor-pointer transition-colors" />
                <Twitter size={20} className="hover:text-[var(--accent)] cursor-pointer transition-colors" />
                <Mail size={20} className="hover:text-[var(--accent)] cursor-pointer transition-colors" />
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[var(--primary)] uppercase tracking-widest text-sm">Navigation</h4>
              <ul className="mt-6 space-y-4 text-[var(--text-muted)]">
                <li><Link href="/" className="hover:text-[var(--accent)] transition-colors">Accueil</Link></li>
                <li><Link href="/bibliotheque" className="hover:text-[var(--accent)] transition-colors">Bibliothèque</Link></li>
                <li><Link href="/recherche" className="hover:text-[var(--accent)] transition-colors">Catalogue</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[var(--primary)] uppercase tracking-widest text-sm">Légal</h4>
              <ul className="mt-6 space-y-4 text-[var(--text-muted)]">
                <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Confidentialité</a></li>
                <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Mentions Légales</a></li>
                <li><a href="#" className="hover:text-[var(--accent)] transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-[var(--surface)] text-center text-[var(--text-muted)] text-sm">
            © {new Date().getFullYear()} BiblioSmart. Tous droits réservés. Créé avec passion pour les amoureux du livre.
          </div>
        </div>
      </footer>
    </main>
  );
}
