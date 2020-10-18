const 
    express = require('express'),
    morgan = require('morgan'),
    helmet = require('helmet'),
    cors = require('cors')

require('dotenv').config()

const 
    forgotPassword = require('./src/routes'),
    app = express()

app
    .use(morgan('dev'))
    .use(helmet())
    .use(express.json())
    .use(cors())
    .use('/', forgotPassword)

module.exports = app
