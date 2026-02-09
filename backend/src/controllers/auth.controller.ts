import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

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
    const userExists = await User.findOne({ $or: [{ email }, { pseudo }] });

    if (userExists) {
      return res.status(400).json({
        status: 'error',
        message: 'Un utilisateur avec cet email ou ce pseudo existe déjà',
      });
    }

    // 2. Créer l'utilisateur
    const user = await User.create({
      email,
      pseudo,
      name,
      password,
    });

    if (user) {
      res.status(201).json({
        status: 'success',
        data: {
          _id: user._id,
          email: user.email,
          pseudo: user.pseudo,
          name: user.name,
          token: generateToken(user._id.toString()),
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({
      status: 'error',
      message: 'Erreur lors de l’inscription',
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

    // 1. Trouver l'utilisateur par email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({
        status: 'error',
        message: 'Identifiants invalides',
      });
    }

    // 2. Vérifier le mot de passe
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({
        status: 'error',
        message: 'Identifiants invalides',
      });
    }

    // 3. Mettre à jour la date de dernière connexion
    user.lastLogin = new Date();
    await user.save();

    res.status(200).json({
      status: 'success',
      data: {
        _id: user._id,
        email: user.email,
        pseudo: user.pseudo,
        name: user.name,
        token: generateToken(user._id.toString()),
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
