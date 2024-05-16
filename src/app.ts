import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import textRoutes from './routes/textRoutes';

const app = express();
app.use(bodyParser.json());

const mongoUri = 'mongodb://localhost:27017/text-analyzer';

mongoose.connect(mongoUri)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', textRoutes);

export default app;
