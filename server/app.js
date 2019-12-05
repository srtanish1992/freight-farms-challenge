// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const authRouter = require('./routers/auth')
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true  });

// App setup
app.use(morgan('combined')),
app.use(cors()),
app.use(bodyParser.json({type:'*/*'})),
app.use(authRouter);

module.exports = app;