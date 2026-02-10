import bcrypt from 'bcryptjs';
import prisma from '../config/prisma';
import { User } from '../types/prisma.types';

export class UserService {
  // Hash password
  static async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(password, salt);
  }

  // Compare password avec protection contre les timing attacks
  static async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
    // Toujours effectuer la comparaison même si le hash n'existe pas
    // pour éviter les timing attacks
    if (!hashedPassword) {
      // Attendre un temps similaire à une vraie comparaison bcrypt
      await new Promise(resolve => setTimeout(resolve, 100));
      return false;
    }
    
    return bcrypt.compare(password, hashedPassword);
  }

  // Create user
  static async createUser(data: {
    email: string;
    pseudo: string;
    name: string;
    password?: string;
    googleId?: string;
  }): Promise<User> {
    const userData: any = {
      email: data.email,
      pseudo: data.pseudo,
      name: data.name,
    };

    if (data.password) {
      userData.password = await this.hashPassword(data.password);
    }

    if (data.googleId) {
      userData.googleId = data.googleId;
    }

    return prisma.user.create({
      data: userData,
    });
  }

  // Find user by email
  static async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { email: email.toLowerCase() },
    });
  }

  // Find user by pseudo
  static async findByPseudo(pseudo: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { pseudo },
    });
  }

  // Find user by ID
  static async findById(id: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: { id },
    });
  }

  // Update user last login
  static async updateLastLogin(id: string): Promise<User> {
    return prisma.user.update({
      where: { id },
      data: { lastLogin: new Date() },
    });
  }

  // Update user
  static async updateUser(id: string, data: Partial<User>): Promise<User> {
    const updateData: any = { ...data };
    
    // If password is being updated, hash it
    if (data.password) {
      updateData.password = await this.hashPassword(data.password);
    }

    return prisma.user.update({
      where: { id },
      data: updateData,
    });
  }
}