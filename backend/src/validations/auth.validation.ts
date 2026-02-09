import { body, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({
    status: 'error',
    errors: errors.array().map((err) => ({
      field: err.type === 'field' ? err.path : err.type,
      message: err.msg,
    })),
  });
};

export const registerValidation = [
  body('email')
    .isEmail()
    .withMessage('Veuillez fournir un email valide')
    .normalizeEmail(),
  body('pseudo')
    .isLength({ min: 3 })
    .withMessage('Le pseudo doit contenir au moins 3 caractères')
    .trim(),
  body('name')
    .notEmpty()
    .withMessage('Le nom est requis')
    .trim(),
  body('password')
    .isLength({ min: 8 })
    .withMessage('Le mot de passe doit contenir au moins 8 caractères')
    .matches(/\d/)
    .withMessage('Le mot de passe doit contenir au moins un chiffre')
    .matches(/[a-z]/)
    .withMessage('Le mot de passe doit contenir au moins une lettre minuscule')
    .matches(/[A-Z]/)
    .withMessage('Le mot de passe doit contenir au moins une lettre majuscule'),
];

export const loginValidation = [
  body('email').isEmail().withMessage('Veuillez fournir un email valide').normalizeEmail(),
  body('password').notEmpty().withMessage('Le mot de passe est requis'),
];
