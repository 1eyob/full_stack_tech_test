import express, { Application, Request, Response } from "express";
import entitiesRouter from "./clean_me.js"; // import entities router

const app: Application = express();

const PORT: number = 3001;

//Load Routes
import userRoute from "./routes/users";
// Use Routes
const apiVersion = "/api/v1";

//use routes
app.use(`${apiVersion}/auth`, userRoute);

app.use("/", entitiesRouter); // use entities router at path '/entities'

app.use("/", (req: Request, res: Response): void => {
  res.send("Hello world!");
});

app.listen(PORT, (): void => {
  console.log("SERVER IS UP ON PORT:", PORT);
});
