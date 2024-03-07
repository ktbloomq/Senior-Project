import express, { RequestHandler, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import { execute } from './services/mysql.connector';

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;
app.use(cors());
app.use(helmet());

let getUsers:RequestHandler = async function(req: Request, res: Response) {
  let users = await execute("SELECT * FROM  users",[]);
  res.status(200).json(users);
}

app.get('/', getUsers);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
