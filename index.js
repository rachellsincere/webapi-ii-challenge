const express = require('express');

//const db = require('../../data/db.js');

const server = express();

//Last step: server listening
server.listen(4000, () => {
    console.log('server is running on port 4000');
});
