//importo framework express
const express = require("express");
//creo un'app
const app = express();
//imposto la porta su cui il server ascolta
const port = 3000;

app.get("/", (req, res)=>{
    res.send("<h1>Server del mio blog</h1>")
})

// Avvia il server sulla porta specificata e mostra un messaggio in console quando è pronto
app.listen(port, ()=> {
    console.log(`example listening on port ${port}`)
})