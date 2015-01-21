# hapi-mysql

## Usage

### Register plugin:

```javascript
var server = Hapi.createServer('0.0.0.0', 8000);
server.pack.require('hapi-mysql', Config.db, function(err) {
  if (err) {
    console.error(err);
    throw err;
  }
});
```

### Use plugin:

```javascript
request.server.plugins['hapi-mysql'].pool.getConnection(function(err, connection) {

  // Use the connection
  connection.query(
    'SELECT 1 FROM mytable',
    function(err, rows) {

      if(err) {
        throw new Error(err)
      }
    }
  )

  // And done with the connection.
  connection.release();
})
```
