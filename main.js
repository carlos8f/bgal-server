var axon = require('axon')
  , push = axon.socket('push')
  , pull = axon.socket('pull')
  , saw = require('saw')
  , id = require('idgen')()

var port = 6634;

push.bind(port);
console.log(id, 'push server started on port: ' + port);

pull.bind(port + 1);
console.log(id, 'pull server started on port: ' + (port + 1));

pull.on('message', function (buf) {
  console.log(id, 'got pull message: ' + buf.toString());
  push.send('relay msg: ' + buf.toString());
});
