import express, { Application, Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

// Routes imports
import authRoutes from './routes/auth.routes';

// Middleware imports
import { errorHandler } from './middlewares/error.middleware';
import { securityHeaders } from './middlewares/security.middleware';
import { preventNoSQLInjection, sanitizeInput } from './middlewares/inputSanitization.middleware';
import { generalLimiter } from './config/rateLimit.config';

const app: Application = express();

// Security middleware
app.use(helmet());
app.use(securityHeaders);
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
}));

// Rate limiting général
app.use('/api', generalLimiter);

// Input sanitization and security
app.use(preventNoSQLInjection);
app.use(sanitizeInput);

// Body parsing
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API Routes
import securityRoutes from './routes/security.routes';
app.use('/api/auth', authRoutes);
app.use('/api/security', securityRoutes);

// Health check
app.get('/api/health', (req: Request, res: Response) => {
    res.status(200).json({
        status: 'ok',
        message: 'BiblioSmart API is running',
        timestamp: new Date().toISOString(),
    });
});

// 404 handler
app.use((req: Request, res: Response) => {
    res.status(404).json({ status: 'error', message: 'Route non trouvée' });
});

// Global error handler
app.use(errorHandler);

export default app;
