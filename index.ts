import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import connectDB from './mongoConnection'
import storageRoutes from './routes/storage.routes'

dotenv.config()

const app: Express = express()

const swaggerDefinition: SwaggerDefinition = {
  info: {
    title: 'My Home Storage API',
    version: '1.0.0',
    description: 'TypeScript API for home-storage app with Swagger documentation',
  },
}

const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ['./routes/*.ts']
})

connectDB()

app.use(cors())
app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', storageRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000')
})