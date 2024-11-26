const fs = require('fs');
const path = require('path');

// Lê o arquivo JSON de notícias
const getAllNews = () => {
  const dataPath = path.join(__dirname, '../data/news.json');
  const rawData = fs.readFileSync(dataPath);
  const newsData = JSON.parse(rawData);
  return newsData.noticias; // Retorna o array de notícias
};

module.exports = { getAllNews };
