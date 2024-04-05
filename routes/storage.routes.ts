import { Router, Request, Response } from 'express'

const router = Router()


/**
 * @swagger
 * /api/storage:
 *   get:
 *     description: Get all the storage
 *     responses:
 *       200:
 *         description: Get all storage items
 *         content: application/json
 *         schema: 
 *           type: object
 *           properties:
 *             storage:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/StorageItem'
 *   post:
 *     description: Add storage item
 *     responses:
 *       200:
 *         description: Add storage
 *         content: application/json
 *         schema:
 *           type: object
 *           properties:
 *             storage:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/StorageItem'
 * definitions:
 *   StorageItem:
 *     type: object
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       quantity:
 *         type: number
 *       unit:
 *         type: string
 *       created_at:
 *         type: string
 *       updated_at:
 *         type: string
 *   Error:
 *     type: object
 *     properties:
 *       message:
 *         type: string
 *       error:
 *         type: string
 *       name:
 *         type: string
 *       details:
 *         type: string
 *       statusCode:
 *         type: number
 *       statusMessage:
 *         type: string
 * 
 */
router.get('/storage', (req: Request, res: Response) => {
  res.send('Got all the storage').status(200)
})

router.post('/storage', (req: Request, res: Response) => {
  res.send('Storage Itam').status(200)
})

export default router