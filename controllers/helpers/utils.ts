import swaggerJSDoc, { SwaggerDefinition } from 'swagger-jsdoc'


const swaggerDefinition: SwaggerDefinition = {
  info: {
    title: 'My Home Storage API',
    version: '1.0.0',
    description: 'TypeScript API for home-storage app with Swagger documentation',
  },
}

export const swaggerSpec = swaggerJSDoc({
  swaggerDefinition,
  apis: ['./routes/*.ts']
})
