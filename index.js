var mysql = require('mysql');

var register = function (server, options, next) {
    console.log('MySQL plugin registered');

    if (!options.host) {
        throw new Error('DB host not defined in config');
    }

    var pool = mysql.createPool(options);

    server.expose('pool', pool);

    return next();
};

register.attributes = {
    pkg: require('./package.json')
};

module.exports = register;
