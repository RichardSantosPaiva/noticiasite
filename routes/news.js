// routes/news.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Caminho para o arquivo JSON
const noticiasFilePath = path.join(__dirname, '../data/noticias.json');

// Rota para mostrar as notícias
router.get('/noticias', (req, res) => {
  // Lê o arquivo JSON
  fs.readFile(noticiasFilePath, 'utf-8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo de notícias:', err); // Exibe o erro completo no console
      return res.status(500).send('Erro ao ler o arquivo de notícias');
    }

    try {
      // Converte o arquivo JSON para um objeto JavaScript
      const noticias = JSON.parse(data);

      // Renderiza a página EJS com as notícias
      res.render('noticias', { noticias });
    } catch (e) {
      console.error('Erro ao parsear o arquivo JSON:', e);
      return res.status(500).send('Erro ao processar o arquivo JSON');
    }
  });
});

module.exports = router;
