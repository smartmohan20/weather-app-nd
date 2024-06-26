import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// Load environment variables from .env file
dotenv.config();

import rootRoutes from './routes/rootRoutes';
import weatherRouters from './routes/weather/weatherRoutes';

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Use the routes
app.use('/', rootRoutes);
app.use('/weather', weatherRouters);

export default app;
