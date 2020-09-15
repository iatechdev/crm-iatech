const db = require('./lib/dbConnect');
const https = require('https');
const fs = require('fs');


const express = require('express');
const morgan = require('morgan');


//Initialization
const app = express();
const http = require('http').Server(app);

//Setting
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const key = fs.readFileSync('/etc/ssl/iatech.key');
const cert = fs.readFileSync('/etc/ssl/certs/iatech.crt'); 
const options = {
    key:key,    
    cert:cert
};


app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-With, Content-Type, Accept,Authorization');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods','PUT,POST,PATH,DELETE,GET')
        return res.status(200).json({});
    }
    next(); 
});

//routes
app.use('/api/customer',require('./routes/api/customer')),
app.use('/api/billings',require('./routes/api/billings')),
app.use('/api/tickets',require('./routes/api/tickets')),
app.use('/api/register',require('./routes/api/register'))

//start the server

https.createServer(options, app).listen(4000);
//app.listen(app.get('port'), () => {
//    console.log(`Server On Port ${app.get('port')}`);
//});
