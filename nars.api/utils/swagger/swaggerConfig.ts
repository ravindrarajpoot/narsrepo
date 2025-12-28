import swaggerJsdoc from 'swagger-jsdoc';
import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0', // Specify the OpenAPI version
    info: {
      title: 'My Node.js TypeScript API',
      version: '1.0.0',
      description: 'API documentation using Swagger and JSDoc',
    },
    servers: [
      {
        url: 'http://localhost:3000', // Update with your server URL
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  // Path to the API docs (JSDoc comments in TypeScript files)
  apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Adjust paths based on your project structure
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

export default swaggerSpec;
