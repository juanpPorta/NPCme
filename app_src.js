const express = require('express');
const app = express();

// creamos un servidor http a partir de la libreria express 
const http = require('http').Server(app);
// para generar una comunicacion vamos a trabajar con socket.io
const io = require('socket.io')(http)

// routes
app.use( require('./routes/littlezoom.routes') );
// donde vamos a cargar los htmol con lo que vamos  a trabajar 
app.use(express.static(__dirname + "/public"));

io.on('connection',(socket)=>{
    socket.on('stream',(image)=>{
        socket.broadcast.emit('stream',image);
    })
})

module.exports= http;
