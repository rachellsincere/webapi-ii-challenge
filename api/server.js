const express = require('express');

const db = require('../data/db.js'); //updated to show new path for db
const postRouter = require('../Express-router.js');

const server = express();

server.use(express.json());

server.use('/api/posts', postRouter);


//export default server in a way that works with nodejs, not es6
module.exports = server;