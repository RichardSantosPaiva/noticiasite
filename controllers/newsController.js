// controllers/newsController.js
const NewsModel = require('../models/newsModel');

const getNews = (req, res) => {
  const news = NewsModel.getAllNews(); // Obtém as notícias do modelo
  res.render('index', { noticias: news }); // Envia as notícias para a view
};

module.exports = { getNews };
