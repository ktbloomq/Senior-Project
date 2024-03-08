import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { userRouter } from './users/user.routes';

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet());

// Routers
app.use('/api/users',userRouter);


app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
