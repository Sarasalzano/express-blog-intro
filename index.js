//importo framework express
const express = require("express");
//creo un'app
const app = express();
//imposto la porta su cui il server ascolta
const port = 3000;

//accedo ai file statici dalla cartella public
app.use(express.static("public"));

//crea array post
const posts = [
    {
        "nome":"ciambellone",
        "contenuto":"ricetta ciambellone",
        "immagine": "/images/ciambellone.jpeg",
        "tags": ["colazione", "torte", "dolci"],
    },

    {
        "nome":"cracker barbabietola",
        "contenuto":"ricetta cracker alla barbabietola",
        "immagine": "/images/cracker_barbabietola.jpeg",
        "tags": ["colazione", "cracker"],
    },

    {
        "nome":"pane fritto dolce",
        "contenuto":"ricetta pane fritto dolce",
        "immagine": "/images/pane_fritto_dolce.jpeg",
        "tags": ["colazione", "pane", "dolci"],
    },

    {
        "nome":"pasta barbabietola",
        "contenuto":"ricetta pasta lalla barbabietola",
        "immagine": "/images/pasta_barbabietola.jpeg",
        "tags": ["barbabietola", "bleah", "pasta"],
    },

    {
        "nome":"torta paesana",
        "contenuto":"ricetta torta paesana",
        "immagine": "/images/torta_paesana.jpeg",
        "tags": ["colazione", "torte", "dolci"],
    },
];


app.get("/bacheca", (req, res)=>{
    res.json(posts);
});


// definisce la route principale "/" e invia una risposta al browser
app.get("/", (req, res)=>{
    res.send("<h1>Server del mio blog</h1>")
});

//avvia il server sulla porta specificata e mostra un messaggio in console quando è pronto
app.listen(port, ()=> {
    console.log(`example listening on port ${port}`)
});