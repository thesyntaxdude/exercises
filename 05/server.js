import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import AppError from "./utils/AppError.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/async-error", async (req, res, next) => {
  throw new AppError("/async-error hit", 400);
});

app.get("/tasks/:id", (req, res, next) => {
  if (req.params.id === "999") {
    return next(new AppError("Task not found", 404));
  }
  res.json({ id: req.params.id, title: "task" });
});

app.use((req, res, next) => {
  next(new AppError("That path is invalid", 404));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});

// next() just passes control to the next middleware but next(error) skips all other middleware and finds the first error handler it can find. basically the middleware with 4 arguments.

// It could lead to security issues. Plus it's not very professional.
