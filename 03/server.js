import express from "express";
import productsRouter from "./routes/products.js";
import articlesRouter from "./routes/conceptual.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/api/products", productsRouter);
app.use("/api/articles", articlesRouter);
app.use("/tasks", taskRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// If a request GET /api/products/99 came through the server,
// req.baseUrl = /api/products and req.path = /99.
// req.path just focuses on the everything after the base URL excluding the queries.
