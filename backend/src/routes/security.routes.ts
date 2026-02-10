import { Request, Response } from 'express';
import { generateCSRFMiddleware, validateCSRFMiddleware } from '../middlewares/csrf.middleware';
import { protect } from '../middlewares/auth.middleware';
import express from 'express';

const router = express.Router();

// Route pour obtenir un token CSRF (nécessite d'être connecté)
router.get('/csrf-token', protect, generateCSRFMiddleware);

// Route protégée par CSRF pour tester
router.post('/protected-action', protect, validateCSRFMiddleware, (req: Request, res: Response) => {
  res.json({
    status: 'success',
    message: 'Action protégée réussie!',
    data: req.body,
  });
});

export default router;