const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Definir o motor de view como EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir arquivos estáticos (imagens, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para as notícias
app.get('/noticias', (req, res) => {
    // Lendo o arquivo de notícias
    fs.readFile(path.join(__dirname, 'data', 'noticias.json'), 'utf8', (err, data) => {
        if (err) {
            console.error("Erro ao ler o arquivo de notícias", err);
            return res.status(500).send("Erro ao ler o arquivo de notícias.");
        }

        const noticias = JSON.parse(data).noticias;  // Parse para JSON

        // Renderizando a view com os dados das notícias
        res.render('index', { noticias });
    });
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
