const Blog = require("../models/blogModel");
//CRUD
const fetchBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json({ data: blog });
  } catch (error) {
    res.status(404).json({ msg: "조회된 데이터가 없습니다" });
  }
};

const createBlog = async (req, res) => {
  const newObj = req.body;
  console.log("newblog", newObj);
  const newBlog = new Blog(newObj);
  try {
    await newBlog.save();
    res.status(201).json({ data: "blog created" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
const updateBlog = async (req, res) => {
  try {
    const _id = req.body.id;
    const updateBlog = req.body;
    console.log("newblog", updateBlog);
    await Blog.findByIdAndUpdate(_id, updateBlog);
    res.status(200).json({ msg: "Blog is updated" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
const deleteBlog = async (req, res) => {
  const _id = req.body.id;
  try {
    await Blog.findByIdAndDelete(_id);
    res.status(200).json({ msg: "blog is deleted" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = { fetchBlog, createBlog, updateBlog, deleteBlog };
