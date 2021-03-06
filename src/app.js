import express from 'express';
import routes from './routes';
import connectToDatabase from './configs/database';

const app = express();
const PORT = process.env.PORT || 3001;

connectToDatabase();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/v1/property', routes);

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Property service is running in ${PORT}`));
