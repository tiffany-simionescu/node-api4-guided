const server = require('./api/server.js');

const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://${host}:${port} ***\n`);
});
