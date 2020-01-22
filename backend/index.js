const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

app.set('port', process.env.PORT || 4000);


app.listen(app.get('port'), () => {
    console.log(`Server On Port ${app.get('port')}`);
});