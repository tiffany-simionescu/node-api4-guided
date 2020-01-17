const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api/api-router');

const server = express();
const host = process.env.HOST || "127.0.0.1";
const port = process.env.PORT || 8080;

server.use(helmet());

server.use('/api', apiRouter);

server.use((req, res, next) => {
  console.log(`
    ${new Date().toLocaleString()} - ${req.ip} - ${req.method} - ${req.url}
  `)
})

server.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to my API",
    cohort: process.env.LAMBDA_SCHOOL,
    secret: process.env.SUPER_SECRET_API_KEY
  })
})  
// end of copied server

server.listen(port, () => {
  console.log(`\n*** Server Running on http://${host}:${port} ***\n`);
});
