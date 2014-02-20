var mysql = require('mysql');

exports.register = function (plugin, options, next) {

  console.log("mysql plugin registered")

  if(!options.host) {
    throw new Error("DB host not defined in config")
  }

  var pool = mysql.createPool(options);

  plugin.expose('pool', pool);
  next();

}