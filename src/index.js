// * Base Libraries * //
const fs = require('fs');
const path = require('path');

// * Express * //
const express = require('express');
const app = express();
const http = require('http');

// * Socket.io * //
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

// * Host Config * //
const port = 3000
let globals = {
  lobbies: {},
  socket_states: {}
}

// * Public Access * //
app.use(express.static(__dirname + '/public'))

fs.readdirSync(__dirname + "/api").forEach(file => {
  if (!file.includes(".js")) return;

  let func = require(__dirname + "/api/" + file);

  try { func(globals, app) } catch { }
});

// * Socket Querying * //
io.on('connection', (socket) => {
  console.log('a user connected', socket.id);
  
  globals.socket_states[socket.id] = {
    current_lobby: ""
  }

  socket.on("disconnect", (reason) => {
    console.log(reason)
  })
  
  fs.readdirSync(__dirname + "/socket").forEach(file => {
    if (!file.includes(".js")) return;
    
    let func = require(__dirname + "/socket/" + file);

    try { func(globals, io, socket) } catch {}
  });
});

// * 404 Paging * //
app.get('*', function(req, res){
  res.status(404).sendFile("index.html", { root: path.join(__dirname, "./public/404")})
});

// * Server Hosting * //
server.listen(port, () => {
  console.log(`App listening on port ${port}`)
})