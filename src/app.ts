import express, { Express } from 'express';
import { json } from 'body-parser';

import { geoAPI } from './routes/geo';

// initialize express
const app: Express = express();

app.use(json());

// initialize routes
app.use(geoAPI);

export { app };
