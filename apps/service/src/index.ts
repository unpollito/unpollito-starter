import "dotenv/config";
import express from "express";

const app = express();

app.get('/', function (req, res) {
  console.log(req);
  res.send('Hello World')
});

app.listen(process.env.PORT);

