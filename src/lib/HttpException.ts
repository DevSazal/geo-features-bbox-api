import { Request, Response, NextFunction } from 'express';

/**
 * Exception Handler (HTTP)
 *
 * to handle error for rest api
 * @param {Error} error
 * @return {Response} response
 */
export const exceptionHandler = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response => {
  // default status code
  const statusCode = 500;
  const message = error.message || 'Internal Server Error!';

  return response.status(statusCode).json({
    error: message,
  });
};
