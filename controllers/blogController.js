const Blog = require("../models/blogModel");
//CRUD
const fetchBlog = async (req, res) => {
  try {
    const blog = await Blog.find();
    res.status(200).json(blog);
  } catch (error) {
    res.status(404).json({ msg: "조회된 데이터가 없습니다" });
  }
};

const createBlog = async (req, res) => {
  // const newBlog = {
  //   title: req.body.title,
  //   content: req.body.content,
  //   img: req.file.filename,
  //   timestamp: req.body.timestamp,
  // };
  const post = req.body;

  const newPost = new Blog(post);
  Blog.create(newPost, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
};

const updateBlog = async (req, res) => {
  try {
    const _id = req.params.id;
    const updateBlog = req.body;
    await Blog.findByIdAndUpdate(_id, updateBlog);
    res.status(200).json({ msg: "Blog is updated" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await Blog.findByIdAndRemove(id);
    res.status(200).json({ msg: "blog is deleted" });
  } catch (error) {
    res.status(400).json({ msg: error });
  }
};

module.exports = { fetchBlog, createBlog, updateBlog, deleteBlog };
