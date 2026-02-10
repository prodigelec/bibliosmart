import dotenv from 'dotenv';

// Load environment variables BEFORE importing app
dotenv.config();

import prisma from './config/prisma';
import app from './app';

const PORT = process.env.PORT || 5000;

// Fonction pour démarrer le serveur
const startServer = async () => {
  try {
    // Tester la connexion à la base de données
    await prisma.$connect();
    console.log('📊 Base de données MongoDB connectée avec Prisma');

    // Démarrer le serveur
    app.listen(PORT, () => {
      console.log(`🚀 BiblioSmart API running on http://localhost:${PORT}`);
      console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error) {
    console.error('❌ Erreur lors du démarrage du serveur:', error);
    process.exit(1);
  }
};

// Gestion de l'arrêt gracieux
process.on('SIGINT', async () => {
  console.log('\n📴 Arrêt du serveur...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n📴 Arrêt du serveur...');
  await prisma.$disconnect();
  process.exit(0);
});

startServer();