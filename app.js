const express = require('express')
const app = express()
const path = require('path')
const PORT = 3010

app.use( express.static(__dirname + '/public'))

app.listen(PORT, ()=>console.log("Servidor corriendo en el puerto "+PORT))

app.get('/',(req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/home.html'))
})
