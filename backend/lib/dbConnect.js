const { promisify } = require('util');
const mysql = require('mysql');
const mysqlPool = mysql.createPool({
        host :'127.0.0.1',
        user :'andres',
        password : '1',
        database : 'db_pruebas_crmmall',
    }
);

mysqlPool.getConnection((err, connection) => {
    if (err) {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }
    
    if (connection) {
        connection.release();
        console.log('BD is Connected');
        return;
    }
});

mysqlPool.query = promisify(mysqlPool.query);

module.exports = mysqlPool;

