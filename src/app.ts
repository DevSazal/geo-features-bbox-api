import express, { Express } from 'express';
import { exceptionHandler } from './lib/HttpException';
import { json } from 'body-parser';

import { geoAPI } from './routes/geo';

// initialize express
const app: Express = express();

app.use(json());

// initialize routes
app.use(geoAPI);

// handle exception
app.use(exceptionHandler);

export { app };
