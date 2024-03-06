import express from 'express'
import dotenv from 'dotenv'

dotenv.config();
const app: express.Application = express();
const port = process.env.PORT;

app.get('/', (_req, _res) => {
  _res.send("Typescript with express");
});

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
