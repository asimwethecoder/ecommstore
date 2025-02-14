import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();

app.use(express.json()); // allows us to accept JSON data in the req.body
const PORT = process.env.PORT || 5001;

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('Server started on http://localhost' + PORT);
});
