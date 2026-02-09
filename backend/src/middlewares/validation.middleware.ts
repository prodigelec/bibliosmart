import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

export const validateObjectId = (paramName: string = 'id') => {
  return (req: Request, res: Response, next: NextFunction) => {
    const id = req.params[paramName] as string;
    
    if (id && !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        status: 'error',
        message: `ID invalide : ${id}`
      });
    }
    
    next();
  };
};

export const validateObjectIds = (paramNames: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const invalidIds: string[] = [];
    
    paramNames.forEach(paramName => {
      const id = req.params[paramName] || req.body[paramName];
      if (id && !mongoose.Types.ObjectId.isValid(id)) {
        invalidIds.push(`${paramName}: ${id}`);
      }
    });
    
    if (invalidIds.length > 0) {
      return res.status(400).json({
        status: 'error',
        message: `IDs invalides : ${invalidIds.join(', ')}`
      });
    }
    
    next();
  };
};