import { Request, Response, NextFunction } from 'express';
import { generateCSRFToken } from '../utils/security.utils';

/**
 * Middleware CSRF pour la protection contre la falsification de requêtes
 */

// Stockage des tokens CSRF (en production, utiliser Redis ou une base de données)
const csrfTokens = new Map<string, { token: string; expires: number }>();

/**
 * Générer un token CSRF pour une session
 */
export const generateCSRFMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const sessionId = req.cookies?.sessionId || req.ip;
  
  // Nettoyer les tokens expirés
  cleanupExpiredTokens();
  
  // Vérifier si un token existe déjà pour cette session
  const existingToken = csrfTokens.get(sessionId);
  if (existingToken && existingToken.expires > Date.now()) {
    res.locals.csrfToken = existingToken.token;
    return next();
  }
  
  // Générer un nouveau token
  const token = generateCSRFToken();
  const expires = Date.now() + 24 * 60 * 60 * 1000; // 24 heures
  
  csrfTokens.set(sessionId, { token, expires });
  res.locals.csrfToken = token;
  
  next();
};

/**
 * Valider le token CSRF
 */
export const validateCSRFMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Méthodes sûres (GET, HEAD, OPTIONS) ne nécessitent pas de validation CSRF
  if (['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
    return next();
  }
  
  const sessionId = req.cookies?.sessionId || req.ip;
  const storedToken = csrfTokens.get(sessionId);
  
  if (!storedToken || storedToken.expires < Date.now()) {
    return res.status(403).json({
      status: 'error',
      message: 'Token CSRF invalide ou expiré',
    });
  }
  
  // Récupérer le token de la requête
  const requestToken = req.headers['x-csrf-token'] || req.body._csrf;
  
  if (!requestToken || requestToken !== storedToken.token) {
    return res.status(403).json({
      status: 'error',
      message: 'Token CSRF invalide',
    });
  }
  
  next();
};

/**
 * Nettoyer les tokens expirés
 */
const cleanupExpiredTokens = () => {
  const now = Date.now();
  for (const [sessionId, tokenData] of csrfTokens.entries()) {
    if (tokenData.expires < now) {
      csrfTokens.delete(sessionId);
    }
  }
};

/**
 * Obtenir le token CSRF pour une session
 */
export const getCSRFToken = (sessionId: string): string | null => {
  const tokenData = csrfTokens.get(sessionId);
  if (tokenData && tokenData.expires > Date.now()) {
    return tokenData.token;
  }
  return null;
};