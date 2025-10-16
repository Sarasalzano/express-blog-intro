//importo framework express per creare e gestire server in node.js
const express = require("express");
//salvo express nella costante app
const app = express();
//imposto la porta su cui il server resterà in ascolto
const port = 3000;

//rendo accessibili i file statici 
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

//definisco una rotta all’indirizzo "/bacheca"
app.get("/bacheca", (req, res)=>{
    res.json(posts);
});


// definisco la rotta principale "/"
app.get("/", (req, res)=>{
    res.send("<h1>Server del mio blog</h1>")
});

//avvia il server sulla porta specificata e mostra un messaggio in console quando è pronto
app.listen(port, ()=> {
    console.log(`example listening on port ${port}`)
});