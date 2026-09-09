import express from "express";

const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => console.log(`listening on port ${port}`));
