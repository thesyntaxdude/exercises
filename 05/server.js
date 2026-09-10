import express from "express";
import errorHandler from "./middlewares/errorHandler.js";
import AppError from "./utils/AppError.js";

const app = express();
const port = process.env.PORT || 3000;

app.get("/async-error", (req, res, next) => {
  if (req.url === "/async-error") {
    throw new AppError("/async-error hit", 400);
  }
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
