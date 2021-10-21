const express = require('express');

const serverStatic = require('serve-static');

const path = require('path');

const server = express();

server.use('/', serverStatic(path.join(__dirname, '/dist')));

server.get(/.*/, (req, res)=> {
    res.sendFile(path.join(__dirname, '/dist/index.html'))
});

const port = process.env.PORT || 8080
server.listen(port)
console.log(`app is listening on port: ${port}`)