import rateLimit from 'express-rate-limit';

// Limite générale pour toutes les routes API
export const generalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requêtes par fenêtre
  message: { 
    status: 'error',
    message: 'Trop de requêtes, veuillez réessayer plus tard.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Limite stricte pour l'authentification (protection contre brute force)
export const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // 5 tentatives par fenêtre
  message: { 
    status: 'error',
    message: 'Trop de tentatives de connexion, veuillez réessayer dans 15 minutes.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
  skipSuccessfulRequests: true, // Ne pas compter les requêtes réussies
});

// Limite pour l'inscription
export const registerLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 3, // 3 inscriptions par heure par IP
  message: { 
    status: 'error',
    message: 'Trop de tentatives d\'inscription, veuillez réessayer dans une heure.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Limite pour les routes sensibles (mot de passe oublié, etc.)
export const sensitiveLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 heure
  max: 3, // 3 tentatives par heure
  message: { 
    status: 'error',
    message: 'Trop de tentatives, veuillez réessayer dans une heure.' 
  },
  standardHeaders: true,
  legacyHeaders: false,
});