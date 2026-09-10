import express from "express";
import checkTitle from "../middlewares/titleChecker.js";

const router = express.Router();

router.route("/").post(checkTitle, (req, res) => {
  res.status(201).json({ message: "Hello there! This is from POST /tasks" });
});

export default router;
