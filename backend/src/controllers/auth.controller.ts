import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserService } from '../services/user.service';
import { LoginAttemptService } from '../services/loginAttempt.service';

const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 jours
  path: '/',
};

/**
 * Génère un Token JWT
 */
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'fallback_secret', {
    expiresIn: process.env.JWT_EXPIRES_IN || '7d',
  } as jwt.SignOptions);
};

/**
 * @desc    Inscription d'un nouvel utilisateur
 * @route   POST /api/auth/register
 * @access  Public
 */
export const register = async (req: Request, res: Response) => {
  try {
    const { email, pseudo, name, password } = req.body;

    // 1. Vérifier si l'utilisateur existe déjà (email ou pseudo)
    const existingUserByEmail = await UserService.findByEmail(email);
    const existingUserByPseudo = await UserService.findByPseudo(pseudo);

    if (existingUserByEmail || existingUserByPseudo) {
      return res.status(400).json({
        status: 'error',
        message: 'Un utilisateur avec cet email ou ce pseudo existe déjà',
      });
    }

    // 2. Créer l'utilisateur
    const user = await UserService.createUser({
      email,
      pseudo,
      name,
      password,
    });

    if (user) {
      const token = generateToken(user.id);
      
      // Définir le cookie HTTP-only
      res.cookie('token', token, COOKIE_OPTIONS);
      
      res.status(201).json({
        status: 'success',
        data: {
          id: user.id,
          email: user.email,
          pseudo: user.pseudo,
          name: user.name,
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Erreur lors de l\'inscription',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

/**
 * @desc    Déconnexion de l'utilisateur
 * @route   POST /api/auth/logout
 * @access  Public
 */
export const logout = async (req: Request, res: Response) => {
  try {
    // Effacer le cookie
    res.clearCookie('token', COOKIE_OPTIONS);
    
    res.status(200).json({
      status: 'success',
      message: 'Déconnexion réussie',
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Erreur lors de la déconnexion',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};

/**
 * @desc    Connexion de l'utilisateur
 * @route   POST /api/auth/login
 * @access  Public
 */
export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const clientIP = req.ip || req.connection.remoteAddress || 'unknown';
    const userAgent = req.get('User-Agent');

    // 1. Vérifier si l'IP ou l'email est bloqué
    if (LoginAttemptService.isIPBlocked(clientIP) || LoginAttemptService.isEmailBlocked(email)) {
      return res.status(429).json({
        status: 'error',
        message: 'Trop de tentatives de connexion. Veuillez réessayer plus tard.',
      });
    }

    // 2. Trouver l'utilisateur par email
    const user = await UserService.findByEmail(email);

    if (!user) {
      // Logguer la tentative échouée
      LoginAttemptService.logAttempt(clientIP, email, false, userAgent);
      
      return res.status(401).json({
        status: 'error',
        message: 'Identifiants invalides',
      });
    }

    // 3. Vérifier le mot de passe
    if (!user.password) {
      // Logguer la tentative échouée
      LoginAttemptService.logAttempt(clientIP, email, false, userAgent);
      
      return res.status(401).json({
        status: 'error',
        message: 'Identifiants invalides',
      });
    }

    const isMatch = await UserService.comparePassword(password, user.password);

    if (!isMatch) {
      // Logguer la tentative échouée
      LoginAttemptService.logAttempt(clientIP, email, false, userAgent);
      
      return res.status(401).json({
        status: 'error',
        message: 'Identifiants invalides',
      });
    }

    // 4. Logguer la tentative réussie
    LoginAttemptService.logAttempt(clientIP, email, true, userAgent);

    // 3. Mettre à jour la date de dernière connexion
    await UserService.updateLastLogin(user.id);

    const token = generateToken(user.id);
    
    // Définir le cookie HTTP-only
    res.cookie('token', token, COOKIE_OPTIONS);

    res.status(200).json({
      status: 'success',
      data: {
        id: user.id,
        email: user.email,
        pseudo: user.pseudo,
        name: user.name,
      },
    });
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Erreur lors de la connexion',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined,
    });
  }
};