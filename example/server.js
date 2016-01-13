/**
 * Basic example 
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({port: 3000});


server.register({
    register: require('../lib/index.js'),
    options: [
        {
            config: {
                connectName: 'teste',
                connectType: 'pool'       
            },
            connection: {
                connectionLimit: 10,
                host: 'localhost',
                database: 'teste',
                user: 'root',
                password: '96342292' 
            }
        },
        {
            config: {
                connectName: 'teste2',
                connectType: ''       
            },
            connection: {
                host: 'localhost',
                database: 'teste',
                user: 'root',
                password: '96342292'    
            }
        }              
    ] 
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.info('The plugins were load!');
    }
});


server.plugins['hapi-mysql'].teste.getConnection((err, conn) => {
    
    conn.query('select * from usuario', (err, rows, fields) => {
        if (err) {
            console.log(err);
        } else {
            console.log(rows);
        }
        
        conn.release();
    });
    
});

server.plugins['hapi-mysql'].teste2.query('select * from usuario', (err, rows, fields) => {
   if (err) {
       console.log(err);
   } else {
       console.log(rows);
   }
});


server.start((err) => {
   if (err) {
       console.error(err);
   } else {
       console.info('Application is running on ' + server.info.uri);
   }
});