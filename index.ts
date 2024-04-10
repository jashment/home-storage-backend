import express, { Express } from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import swaggerUi from 'swagger-ui-express'
import connectDB from './mongoConnection'
import storageRoutes from './routes/storage.routes'
import { swaggerSpec } from './controllers/helpers/utils'
import * as OpenApiValidator from 'express-openapi-validator';

dotenv.config()

const app: Express = express()

connectDB()

app.use(cors())
app.use(bodyParser.json())

app.use(
  OpenApiValidator.middleware({
    apiSpec: './spec/api.spec.yaml',
    validateRequests: true,
    validateResponses: true,
  }),
)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api', storageRoutes);

app.listen(3000, () => {
  console.log('Server started on port 3000')
})