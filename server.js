const express = require('express');
const app = express();

// Página de configuração
app.get('/config_page', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // retorna a página com opções configuráveis
});

// Parâmetros JSON
app.get('/json_params', (req, res) => {
    const jsonParams = [
        { name: "num_questions", label: "Number of Questions", type: "select", options: [5, 10, 15, 20, 30, 40, 50] },
        { name: "category", label: "Select Category", type: "select", options: ["general knowledge", "books", "films", "science", "math"] },
        { name: "difficulty", label: "Select Difficulty", type: "select", options: ["easy", "medium", "hard"] },
        { name: "time", label: "Time per Question (seconds)", type: "select", options: [10, 15, 20, 25, 30, 60] }
    ];
    res.json(jsonParams);
});

app.listen(3000, () => console.log('Service running on port 3000'));
