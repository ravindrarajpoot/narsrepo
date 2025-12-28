import { Options } from 'swagger-jsdoc';

const swaggerOptions: Options = {
  definition: {
    openapi: '3.0.0', // OpenAPI version
    info: {
      title: 'Node.js TypeScript API',
      version: '1.0.0',
      description: 'API documentation for my professional Node.js service',
      contact: {
        name: 'Developer Support',
        email: 'support@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
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
  // Path to the API docs (relative to project root)
  // Ensure your compiled .js or .ts files are included
  apis: ['./src/routes/*.ts', './src/models/*.ts'], 
};

export default swaggerOptions;