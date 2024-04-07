import { Request, Response } from 'express'

export const getAllStorage = (req: Request, res: Response) => {
  return res.send('Got all the storage').status(200)
}

export const addStorageItem = (req: Request, res: Response) => {
  return res.send('Storage Item').status(200)
}