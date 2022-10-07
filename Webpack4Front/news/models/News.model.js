const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  title: String,
  categories: String,
  Comments: [],
});

const News = mongoose.model('News', newsSchema);

module.exports = News;
