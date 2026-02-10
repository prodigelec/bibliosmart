import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { UserService } from '../services/user.service';
import { User } from '../types/prisma.types';

export interface AuthRequest extends Request {
  user?: User;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  // Vérifier le cookie d'abord
  if (req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }
  // Fallback sur le header Authorization si pas de cookie
  else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ status: 'error', message: 'Non autorisé, pas de token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { id: string };
    
    const user = await UserService.findById(decoded.id);
    
    if (!user) {
      return res.status(401).json({ status: 'error', message: 'Non autorisé, utilisateur non trouvé' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ status: 'error', message: 'Non autorisé, token invalide' });
  }
};

export const restrictTo = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ status: 'error', message: 'Non autorisé, utilisateur non connecté' });
    }

    // Pour l'instant, nous n'avons pas de rôles dans le modèle User
    // Cette fonction peut être étendue plus tard si nécessaire
    next();
  };
};