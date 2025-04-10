// const express = require('express')
import express, { Application, Request, Response } from 'express';

const app: Application = express();

//parser
app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Home Page');
});


export default app;
