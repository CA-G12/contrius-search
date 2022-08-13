const http = require('http');
const router = require('./router');

// eslint-disable-next-line no-undef
const server = http.createServer(router);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port  ${PORT}`);
});
