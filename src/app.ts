import mongoose, { ConnectOptions } from 'mongoose';
import contactRoutes from './routes/contactRoutes';
import express, { Express, Request, Response, NextFunction } from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors'

const app: Express = express();
const PORT = 3001;

dotenv.config();

app.use(express.json());
app.use(cors());

(async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL as string, { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();

app.get('/', (request: Request, response: Response) => {
  response.send('Phone Book API is running!');
});

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  response.status(500).send('Something went wrong!');
});

app.use('/contacts', contactRoutes);

app.listen(PORT, () => {
  console.log(`Now listening on port ${PORT}`)
});