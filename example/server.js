/**
 * Basic example 
 */

'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();

server.connection({port: 3000});


server.register({
    require: require('./lib/index.js'),
    option: {
        
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