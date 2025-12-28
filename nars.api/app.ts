import 'express-async-errors';
import express, { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './utils/swagger/swaggerConfig';
import { RegisterRoutes } from "./routes/generated/routes";

import * as swaggerDocument from './dist/swagger.json'; 
const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// // Use body parser to read sent json payloads
// app.use(
//   urlencoded({
//     extended: true,
//   })
// );
// app.use(json());

RegisterRoutes(app);

// If you use tsoa generated routes, they will be registered here if present
try {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { RegisterRoutes } = require('./routes');
  if (RegisterRoutes) RegisterRoutes(app);
} catch (e) {
  console.warn('No generated routes found, safe to ignore.');
}

// Health and sample routes
app.get('/health', (_req, res) => res.json({ status: 'ok' }));
app.get('/api/hello', (_req, res) => res.json({ message: 'Hello from middle layer' }));

// Setup Swagger UI (serves at /api/swagger)
app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// Generic error handler
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error occurred:', err);
  const status = err?.status || 500;
  const message = err?.message || 'Internal Server Error';
  res.status(status).json({ error: message });
});

// Validate port number
const port = process.env.PORT ? Number(process.env.PORT) : 3000;
if (isNaN(port) || port <= 0) {
  console.error('Invalid port number. Falling back to 3000.');
}

// Start the server
if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = app;