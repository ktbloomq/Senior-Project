import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { userRouter } from './users/user.routes';
import { postRouter } from './posts/post.routes';
import { initializeMySqlConnector } from './services/mysql.connector';

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;
initializeMySqlConnector();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet({
    crossOriginResourcePolicy: false,
}));

// Routers
app.use('/api/users',userRouter);
app.use('/api/posts',postRouter);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
