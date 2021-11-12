const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const BlogSchema = new Schema({
  title: { type: String },
  content: { type: String },
});

const Blog = mongoose.model("blog", BlogSchema);

module.exports = Blog;
