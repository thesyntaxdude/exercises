import express from "express";
const router = express.Router();

router.use((req, res, next) => {
  console.log(`${req.method} || ${req.baseUrl}${req.path}`);
  next();
});

router.get("/", (req, res) => {
  res.json({ products: [] });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({ id });
});

export default router;
