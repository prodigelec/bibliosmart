import { Request, Response, NextFunction } from 'express';

/**
 * Middleware pour prévenir les injections NoSQL
 */
export const preventNoSQLInjection = (req: Request, res: Response, next: NextFunction) => {
  const checkObject = (obj: any): boolean => {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }
    
    for (const key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        // Vérifier les opérateurs NoSQL dangereux
        const dangerousOperators = ['$ne', '$gt', '$gte', '$lt', '$lte', '$regex', '$where', '$exists'];
        
        for (const operator of dangerousOperators) {
          if (obj[key][operator] !== undefined) {
            // Logguer la tentative d'injection
            console.warn(`Tentative d'injection NoSQL détectée: ${operator} dans ${key}`);
            return true;
          }
        }
        
        // Récursion pour vérifier les objets imbriqués
        if (checkObject(obj[key])) {
          return true;
        }
      }
    }
    
    return false;
  };
  
  // Vérifier le body
  if (req.body && checkObject(req.body)) {
    return res.status(400).json({
      status: 'error',
      message: 'Requête invalide',
    });
  }
  
  // Vérifier les query parameters
  if (req.query && checkObject(req.query)) {
    return res.status(400).json({
      status: 'error',
      message: 'Requête invalide',
    });
  }
  
  // Vérifier les parameters
  if (req.params && checkObject(req.params)) {
    return res.status(400).json({
      status: 'error',
      message: 'Requête invalide',
    });
  }
  
  next();
};

/**
 * Sanitizer pour les entrées utilisateur
 */
export const sanitizeInput = (req: Request, res: Response, next: NextFunction) => {
  const sanitizeValue = (value: any): any => {
    if (typeof value === 'string') {
      // Supprimer les caractères de contrôle
      let cleaned = value.replace(/[\x00-\x1F\x7F]/g, '');
      
      // Limiter la longueur
      cleaned = cleaned.substring(0, 1000);
      
      // Supprimer les patterns dangereux
      cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
      cleaned = cleaned.replace(/javascript:/gi, '');
      cleaned = cleaned.replace(/on\w+\s*=/gi, '');
      
      return cleaned.trim();
    } else if (Array.isArray(value)) {
      return value.map(sanitizeValue);
    } else if (typeof value === 'object' && value !== null) {
      const sanitizedObj: any = {};
      for (const key in value) {
        if (value.hasOwnProperty(key)) {
          sanitizedObj[key] = sanitizeValue(value[key]);
        }
      }
      return sanitizedObj;
    }
    return value;
  };
  
  // Sanitizer le body
  if (req.body) {
    req.body = sanitizeValue(req.body);
  }
  
  // Sanitizer les query parameters
  if (req.query) {
    req.query = sanitizeValue(req.query);
  }
  
  next();
};