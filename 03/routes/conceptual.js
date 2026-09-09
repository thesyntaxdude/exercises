import express from "express";
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    //handles route
  })
  .post((req, res) => {
    //handles route
  });

router
  .route("/:id")
  .get((req, res) => {
    //handles route
  })
  .put((req, res) => {
    //handles route
  })
  .delete((req, res) => {
    //handles route
  });

export default router;
