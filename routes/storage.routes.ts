import { Router, Request, Response } from 'express'
import { swaggerSpec } from '../controllers/helpers/utils'

const router = Router()

router.get('/storage', (req: Request, res: Response) => {
  res.send('Got all the storage').status(200)
})

router.post('/storage', (req: Request, res: Response) => {
  res.send('Storage Itam').status(200)
})

export default router