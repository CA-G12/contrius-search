const http = require('http');
const router = require('./router');

// eslint-disable-next-line no-undef
const server = http.createServer(router);

const port = 9000;

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port  ${port}`);
});
