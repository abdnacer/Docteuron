import { NextFunction, Request, Response } from 'express'
import HttpException from './HttpException'

const errorMiddleware = (error: HttpException, req: Request, res: Response, next: NextFunction) => {
  const status = error.status || 200
  const message = error.message || 'Something went worng'
  res.status(status).json(message)
}

export default errorMiddleware