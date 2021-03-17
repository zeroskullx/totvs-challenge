import 'reflect-metadata';
import express from 'express';
//import 'express-async-errors';

import cors from 'cors';
import './typeorm/database/connection';
import routes from './routes';

const HOST = '0.0.0.0';
const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.listen(Number(process.env.SERVER_PORT), HOST, () => console.log('🔥 Server is running!'));