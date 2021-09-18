const http = require('http');

const routes = require('./prove01-routes');

const port = process.env.port || 3000;

const server = http.createServer(routes.handler);

server.listen(port, () => console.log(`listening on ${port}; ` + 'press Ctrl-C to terminate...'));