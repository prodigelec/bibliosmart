import { Router } from 'express';
import { register, login, logout } from '../controllers/auth.controller';
import { registerValidation, loginValidation, validate } from '../validations/auth.validation';
import { protect } from '../middlewares/auth.middleware';
import { authLimiter, registerLimiter } from '../config/rateLimit.config';

const router = Router();

/**
 * @route   POST /api/auth/register
 * @desc    Inscription
 */
router.post('/register', registerLimiter, registerValidation, validate, register);

/**
 * @route   POST /api/auth/login
 * @desc    Connexion
 */
router.post('/login', authLimiter, loginValidation, validate, login);

/**
 * @route   POST /api/auth/logout
 * @desc    Déconnexion
 */
router.post('/logout', logout);

/**
 * @route   GET /api/auth/me
 * @desc    Récupérer les infos de l'utilisateur connecté
 */
router.get('/me', protect, async (req: any, res) => {
  res.json({
    status: 'success',
    data: {
      id: req.user.id,
      email: req.user.email,
      pseudo: req.user.pseudo,
      name: req.user.name,
    },
  });
});

export default router;
