import { Request, Response } from 'express';
import { LoginAttemptService } from '../services/loginAttempt.service';

/**
 * @desc    Obtenir les statistiques de tentatives de connexion
 * @route   GET /api/admin/security-stats
 * @access  Private/Admin
 */
export const getSecurityStats = async (req: Request, res: Response) => {
  try {
    const stats = LoginAttemptService.getAttemptStats();
    
    res.status(200).json({
      status: 'success',
      data: stats,
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Erreur lors de la récupération des statistiques',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

/**
 * @desc    Obtenir les tentatives de connexion récentes
 * @route   GET /api/admin/recent-attempts
 * @access  Private/Admin
 */
export const getRecentAttempts = async (req: Request, res: Response) => {
  try {
    // Pour l'instant, retourner une réponse vide
    // En production, cela viendrait d'une base de données
    res.status(200).json({
      status: 'success',
      data: [],
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Erreur lors de la récupération des tentatives',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};