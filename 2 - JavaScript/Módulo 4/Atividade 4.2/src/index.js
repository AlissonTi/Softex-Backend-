const express = require('express') //importar biblioteca express
const app = express() //colocar o express dentro de uma var

app.listen(3333); //porta usada

/*app.listen(3333, () => {
    console.log("Servidor iniciado");
});*/

app.get ('/projets', (require, response)=>{
    console.log("Servidor rodando")
    response.send("Hello world!")
})