import express from "express";

const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => `listening on port ${port}`);

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World" });
});
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  res.json({ userId: id });
});
app.get("/search", (req, res) => {
  const searchTerm = req.query.q;
  res.json({ searchTerm });
});
