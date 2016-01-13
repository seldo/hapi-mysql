/**
 * Basic example 
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({port: 3000});


server.register({
    register: require('../lib/index.js'),
    option: {
        configPlugin: {
            connType: 'pool' //If undefined the plugin use a simple connection, not pool.
        },
        configConnection: {
            host: 'localhost',
            database: 'teste',
            user: 'teste',
            password: '96342292'
        } 
    }
}, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.info('The plugins were load!');
    }
});


server.start((err) => {
   if (err) {
       console.error(err);
   } else {
       console.info('Application is running on ' + server.info.uri);
   }
});