/**
 * Fonctions utilitaires pour la sécurité
 */

/**
 * Échapper les caractères spéciaux HTML
 */
export const escapeHtml = (text: string): string => {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  };
  return text.replace(/[&<>"'\/]/g, (s) => map[s]);
};

/**
 * Nettoyer une entrée utilisateur
 */
export const sanitizeInput = (input: string): string => {
  // Supprimer les caractères de contrôle
  let cleaned = input.replace(/[\x00-\x1F\x7F]/g, '');
  
  // Limiter la longueur
  cleaned = cleaned.substring(0, 1000);
  
  // Supprimer les patterns dangereux
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleaned = cleaned.replace(/javascript:/gi, '');
  cleaned = cleaned.replace(/on\w+\s*=/gi, '');
  
  return cleaned.trim();
};

/**
 * Valider une adresse email avec des règles strictes
 */
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Vérifier la longueur
  if (email.length > 254) return false;
  
  // Vérifier le format
  if (!emailRegex.test(email)) return false;
  
  // Vérifier que le domaine n'est pas suspicieux
  const suspiciousDomains = ['tempmail', '10minutemail', 'guerrillamail', 'mailinator'];
  const domain = email.split('@')[1].toLowerCase();
  
  for (const suspicious of suspiciousDomains) {
    if (domain.includes(suspicious)) {
      return false;
    }
  }
  
  return true;
};

/**
 * Générer un token CSRF sécurisé
 */
export const generateCSRFToken = (): string => {
  const crypto = require('crypto');
  return crypto.randomBytes(32).toString('hex');
};

/**
 * Valider la force d'un mot de passe
 */
export const validatePasswordStrength = (password: string): { valid: boolean; score: number; feedback: string[] } => {
  const feedback: string[] = [];
  let score = 0;
  
  // Longueur
  if (password.length >= 12) score += 2;
  else feedback.push('Le mot de passe doit contenir au moins 12 caractères');
  
  // Minuscules
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push('Ajoutez des lettres minuscules');
  
  // Majuscules
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push('Ajoutez des lettres majuscules');
  
  // Chiffres
  if (/\d/.test(password)) score += 1;
  else feedback.push('Ajoutez des chiffres');
  
  // Caractères spéciaux
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 2;
  else feedback.push('Ajoutez des caractères spéciaux');
  
  // Pas d'espaces
  if (!/\s/.test(password)) score += 1;
  else feedback.push('Le mot de passe ne doit pas contenir d\'espaces');
  
  // Pas de séquences communes
  const commonSequences = ['123', 'abc', 'qwerty', 'password', 'admin'];
  const lowerPassword = password.toLowerCase();
  let hasSequence = false;
  
  for (const seq of commonSequences) {
    if (lowerPassword.includes(seq)) {
      hasSequence = true;
      score -= 2;
      break;
    }
  }
  
  if (hasSequence) {
    feedback.push('Évitez les séquences communes comme "123" ou "abc"');
  }
  
  // Calcul du score final
  const valid = score >= 6;
  
  return { valid, score, feedback };
};