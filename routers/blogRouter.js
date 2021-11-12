const express = require("express");
const {
  fetchBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const router = express.Router();

router.get("/fetch", fetchBlog); //search
router.post("/create", createBlog); //create
router.patch("/update", updateBlog); // update
router.delete("/delete", deleteBlog); //delete

module.exports = router;
