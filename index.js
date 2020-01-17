const express = require('express');
// const helmet = require('helmet');

// const apiRouter = require('./api/api-router');

const app = express();
const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

// server.use(helmet());

// server.use('/api', apiRouter);

app.use((req, res, next) => {
  console.log(`
    ${new Date().toLocaleString()} - ${req.ip} - ${req.method} - ${req.url}
  `)
})

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to my API",
    cohort: process.env.LAMBDA_SCHOOL,
    secret: process.env.SUPER_SECRET_API_KEY
  })
})  
// end of copied server

app.listen(port, host, () => {
  console.log(`\n*** Server Running on http://${host}:${port} ***\n`);
});
