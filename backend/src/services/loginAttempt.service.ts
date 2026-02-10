import { User } from '../types/prisma.types';

export interface LoginAttempt {
  ip: string;
  email: string;
  success: boolean;
  timestamp: Date;
  userAgent?: string;
}

/**
 * Service de journalisation des tentatives de connexion
 */
export class LoginAttemptService {
  private static attempts: LoginAttempt[] = [];
  private static readonly MAX_ATTEMPTS_PER_IP = 5;
  private static readonly MAX_ATTEMPTS_PER_EMAIL = 3;
  private static readonly TIME_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

  /**
   * Enregistrer une tentative de connexion
   */
  static logAttempt(ip: string, email: string, success: boolean, userAgent?: string): void {
    const attempt: LoginAttempt = {
      ip,
      email: email.toLowerCase(),
      success,
      timestamp: new Date(),
      userAgent,
    };

    this.attempts.push(attempt);
    
    // Nettoyer les anciennes tentatives
    this.cleanupOldAttempts();
    
    // Logguer les tentatives échouées
    if (!success) {
      console.warn(`Tentative de connexion échouée - IP: ${ip}, Email: ${email}`);
    }
  }

  /**
   * Vérifier si une IP est bloquée
   */
  static isIPBlocked(ip: string): boolean {
    const recentAttempts = this.getRecentAttemptsByIP(ip);
    const failedAttempts = recentAttempts.filter(attempt => !attempt.success);
    
    return failedAttempts.length >= this.MAX_ATTEMPTS_PER_IP;
  }

  /**
   * Vérifier si un email est bloqué
   */
  static isEmailBlocked(email: string): boolean {
    const recentAttempts = this.getRecentAttemptsByEmail(email);
    const failedAttempts = recentAttempts.filter(attempt => !attempt.success);
    
    return failedAttempts.length >= this.MAX_ATTEMPTS_PER_EMAIL;
  }

  /**
   * Obtenir les tentatives récentes par IP
   */
  private static getRecentAttemptsByIP(ip: string): LoginAttempt[] {
    const cutoffTime = new Date(Date.now() - this.TIME_WINDOW_MS);
    
    return this.attempts.filter(attempt => 
      attempt.ip === ip && 
      attempt.timestamp >= cutoffTime
    );
  }

  /**
   * Obtenir les tentatives récentes par email
   */
  private static getRecentAttemptsByEmail(email: string): LoginAttempt[] {
    const cutoffTime = new Date(Date.now() - this.TIME_WINDOW_MS);
    
    return this.attempts.filter(attempt => 
      attempt.email === email.toLowerCase() && 
      attempt.timestamp >= cutoffTime
    );
  }

  /**
   * Nettoyer les anciennes tentatives
   */
  private static cleanupOldAttempts(): void {
    const cutoffTime = new Date(Date.now() - this.TIME_WINDOW_MS);
    
    this.attempts = this.attempts.filter(attempt => 
      attempt.timestamp >= cutoffTime
    );
  }

  /**
   * Obtenir les statistiques de tentatives
   */
  static getAttemptStats(): {
    totalAttempts: number;
    successfulAttempts: number;
    failedAttempts: number;
    blockedIPs: number;
    blockedEmails: number;
  } {
    const totalAttempts = this.attempts.length;
    const successfulAttempts = this.attempts.filter(a => a.success).length;
    const failedAttempts = totalAttempts - successfulAttempts;
    
    // Compter les IPs et emails bloqués
    const uniqueIPs = [...new Set(this.attempts.map(a => a.ip))];
    const uniqueEmails = [...new Set(this.attempts.map(a => a.email))];
    
    const blockedIPs = uniqueIPs.filter(ip => this.isIPBlocked(ip)).length;
    const blockedEmails = uniqueEmails.filter(email => this.isEmailBlocked(email)).length;

    return {
      totalAttempts,
      successfulAttempts,
      failedAttempts,
      blockedIPs,
      blockedEmails,
    };
  }
}