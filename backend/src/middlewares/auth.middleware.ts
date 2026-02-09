import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

export interface AuthRequest extends Request {
  user?: any;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      token = req.headers.authorization.split(' ')[1];
      
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
      
      req.user = await User.findById(decoded.userId).select('-password');
      
      if (!req.user) {
        return res.status(401).json({ status: 'error', message: 'Non autorisé, utilisateur non trouvé' });
      }

      next();
    } catch (error) {
      return res.status(401).json({ status: 'error', message: 'Non autorisé, token invalide' });
    }
  }

  if (!token) {
    return res.status(401).json({ status: 'error', message: 'Non autorisé, pas de token' });
  }
};

export const restrictTo = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ status: 'error', message: 'Non autorisé, utilisateur non connecté' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ status: 'error', message: 'Accès refusé, permissions insuffisantes' });
    }

    next();
  };
};