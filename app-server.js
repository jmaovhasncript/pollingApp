var express = require('express');

var app = express();

var connections = [];

app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'));

var server = app.listen(3000);
var io = require('socket.io').listen(server);

io.sockets.on('connection',function(socket){

    socket.once('disconnect',function () {

        connections.splice(connections.indexOf(socket),1);
        socket.disconnect();
        console.log("disconnection" + connections.length);
    })
    connections.push(socket);
    console.log("socket connected " , connections.length);
})
console.log("Polling server is running at 'http://localhost:3000'");