import { Response } from 'express';

export const sendResponse = (
  res: Response,
  statusCode: number,
  status: 'success' | 'error',
  data?: any,
  message?: string,
  meta?: any
) => {
  const response: any = {
    status,
    ...(message && { message }),
    ...(data && { data }),
    ...(meta && { meta })
  };

  return res.status(statusCode).json(response);
};

export const sendSuccess = (res: Response, data?: any, message?: string, statusCode = 200) => {
  return sendResponse(res, statusCode, 'success', data, message);
};

export const sendError = (res: Response, message: string, statusCode = 400, data?: any) => {
  return sendResponse(res, statusCode, 'error', data, message);
};

export const sendCreated = (res: Response, data: any, message = 'Créé avec succès') => {
  return sendSuccess(res, data, message, 201);
};

export const sendUpdated = (res: Response, data: any, message = 'Mis à jour avec succès') => {
  return sendSuccess(res, data, message, 200);
};

export const sendDeleted = (res: Response, message = 'Supprimé avec succès') => {
  return sendSuccess(res, null, message, 200);
};

export const sendNotFound = (res: Response, message = 'Ressource non trouvée') => {
  return sendError(res, message, 404);
};

export const sendUnauthorized = (res: Response, message = 'Non autorisé') => {
  return sendError(res, message, 401);
};

export const sendForbidden = (res: Response, message = 'Accès refusé') => {
  return sendError(res, message, 403);
};

export const sendBadRequest = (res: Response, message = 'Requête invalide') => {
  return sendError(res, message, 400);
};