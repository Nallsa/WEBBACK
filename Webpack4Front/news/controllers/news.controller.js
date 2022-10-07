const News = require('../models/News.model');

module.exports.newsController = {
  getNews: async (req, res) => {
    const get = await News.find();
    res.send(get);
  },
  postNews: async (req, res) => {
    const { title, categories, Comments } = req.body;
    const post = await News.create({
      title,
      categories,
      Comments,
    });
    res.json(post);
  },
  patchNews: async (req, res) => {
    const { title, categories, Comments } = req.body;
    const patch = await News.findByIdAndUpdate(req.params.id, {
      title,
      categories,
      Comments,
    });
    res.json(patch);
  },
  deleteNews: async (req, res) => {
    const del = await News.findByIdAndDelete(req.params.id);
    res.json(del);
  },
};
