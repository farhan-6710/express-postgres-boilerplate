import express from "express";
import pingRouter from "./routes/ping.js";

const app = express();

app.use(pingRouter);

export default app;
