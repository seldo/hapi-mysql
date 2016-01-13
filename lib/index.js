'use strict';

const mysql = require('mysql');

exports.register = (server, options, next) => {
    
    
    if (!Array.isArray(options)) {
        throw new Error('The parameter option not is Array');
    }
    
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        
        if (option.config.connectType === 'pool') {
            console.log('The connection ' + option.config.connectName + ' is ' + option.config.connectType);
            server.expose(option.config.connectName, mysql.createPool(option.connection));
        } else {
            console.log('The connection ' + option.config.connectName + ' is ' + option.config.connectType);
            server.expose(option.config.connectName, mysql.createConnection(option.connection));
        }
        
        
        console.log(option);
        
    }
    
    
    
    
    return next();
};




exports.register.attributes = {
    pkg: require('../package.json')
};

