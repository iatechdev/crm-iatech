const db = require('./lib/dbConnect');

const express = require('express');
const morgan = require('morgan');

//Initialization
const app = express();

//Setting
app.set('port', process.env.PORT || 4000);

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


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

//start the server
app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});