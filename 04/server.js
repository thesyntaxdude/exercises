import express from "express";
import logger from "./middlewares/logger.js";
import tasksRouter from "./routes/tasks.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use("/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// app.use(express.json());   applies to all paths, basically it runs everytime there is a request while app.use("/api", express.json()); runs everytime a request with the url beginning with /api comes in

// app.use(express.json()) parses the request body s its usable in the code but in this case it parses the the body after the route uses it. Which means the req.body the route handler uses will be blank.  Inestead app.use(express.json()) should have gone above it.
