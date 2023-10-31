const express = require('express')
const app = express()
const path = require('path')
const PORTH = 3010

app.use( express.static(__dirname + '/public'))

app.listen(PORTH, ()=>console.log("Servidor corriendo en el puerto "+PORTH))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
