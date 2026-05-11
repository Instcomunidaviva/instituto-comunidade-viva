import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
  userId?: string;
  user?: any;
}

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
  try {
    const authHeader = req.headers.authorization;
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({
        message: 'Token não fornecido',
      });
    }

    const token = authHeader.substring(7); // Remove "Bearer "
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');

    req.userId = (decoded as any).id;
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: 'Token inválido ou expirado',
    });
  }
};
