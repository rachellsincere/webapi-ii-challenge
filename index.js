const server = require('./api/server.js');


//Last step: server listening
server.listen(4000, () => {
    console.log('server is running on port 4000');
});
