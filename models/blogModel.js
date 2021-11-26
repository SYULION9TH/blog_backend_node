const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const BlogSchema = new Schema({
  title: { type: String },
  content: { type: String },
  selectedFile: { type: String },
  timestamp: String,
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
