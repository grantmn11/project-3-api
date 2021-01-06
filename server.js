const { Router } = require('express');
const express = require('express');
const logger = require('morgan');


require('dotenv').config();

require('./config/database');

const app = express();

// mount middleware
app.use(express.json());
app.use(logger('dev'));
// app.use(cors());

// mount routes
// app.use('/api/users', require('./routes/api/users'));


// tell express to listen
const port = process.env.PORT || 3001

app.listen(port, function(){
    console.log(`Express is listening on port: ${port}`)
})
