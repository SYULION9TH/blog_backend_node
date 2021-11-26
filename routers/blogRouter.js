const express = require("express");
const {
  fetchBlog,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");
const multer = require("multer");
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${new Date().getTime()}_${file.originalname}`);
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });
router.get("/fetch", fetchBlog); //search
router.post("/create", createBlog); //create
router.patch("/update/:id", updateBlog); // update
router.delete("/delete/:id", deleteBlog); //delete

module.exports = router;
