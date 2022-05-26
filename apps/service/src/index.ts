import "dotenv/config";
import express from "express";
import { db } from "@unpollito/db-client";

const app = express();

app.get("/", async function (req, res) {
  console.log(req);
  await db.user.getUserById("foo");
  res.send("Hello World");
});

app.listen(process.env.PORT);
