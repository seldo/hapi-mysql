'use strict';

const mysql = require('mysql');

exports.register = (server, options, next) => {
    if (!Array.isArray(options)) {
        throw new Error('The parameter option not is Array');
    }
    
    for (let i = 0; i < options.length; i++) {
        let option = options[i];
        if (option.config.connectType === 'pool') {
            server.expose(option.config.connectName, mysql.createPool(option.connection));
        } else {
            server.expose(option.config.connectName, mysql.createConnection(option.connection));
        }
    }

    next();
};

exports.register.attributes = {
    pkg: require('../package.json')
};

