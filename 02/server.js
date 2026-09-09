import express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Books API
app
  .route("/books")
  .get((req, res) => {
    res.json([]);
  })
  .post((req, res) => {
    res.status(201).json({ message: "Book created" });
  });

app.get("/books/:id", (req, res) => {
  res.json({ id: req.params.id });
});

// products route
app.get("/products", (req, res) => {
  const category = req.query.category;
  const page = req.query.page;
  res.json({ category, page });
});

// Fix the code challenge:
// What's wrong with the code?
// Well it has a parameterized route in the first route handler so when you enter a route that matches say "/users/me", express will just use the first route handler and use "me" as the parameter, :id.
// The fix would be to change the order. like this:

app.get("/users/me", (req, res) => {
  res.json({ user: "current user" });
});

app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});

// /tasks/:id route

app.put("/tasks/:id", (req, res) => {
  const { title } = req.body;
  const { id } = req.params;
  res.json({ title, id });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
