// const express = require('express');
// const helmet = require('helmet');

// const apiRouter = require('./api-router.js');

// const server = express();

// server.use(helmet());

// server.use('/api', apiRouter);

// server.use((req, res, next) => {
//   console.log(`
//     ${new Date().toLocaleString()} - ${req.ip} - ${req.method} - ${req.url}
//   `)
// })

// server.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Welcome to my API",
//     cohort: process.env.LAMBDA_SCHOOL,
//     secret: process.env.SUPER_SECRET_API_KEY
//   })
// })  

// module.exports = server;
