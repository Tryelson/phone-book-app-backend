import express, { Request, Response, NextFunction, Application } from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser';
import mongoose, { ConnectOptions } from 'mongoose';
import contactRoutes from './routes/contactRoutes';
import dotenv from 'dotenv';

const app: Application = express();
const PORT = 3001;

dotenv.config();

app.use(bodyParser.json());
app.use(cors());

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGO_DB_URL as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions);

mongoose.connection.on('error', (error: Error) => console.log(error));

app.get('/', (request: Request, response: Response) => {
  response.send('Phone Book API is running!');
});

app.use('/contacts', contactRoutes);

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  response.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});