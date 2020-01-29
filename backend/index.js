const db = require('./lib/dbConnect');

const express = require('express');
const morgan = require('morgan');

//Initialization
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));

//routes
app.use(require('./routes/api/customer'));

//start the server
app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});