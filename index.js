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
        "immagine":"/img/ciambellone.jpeg",
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