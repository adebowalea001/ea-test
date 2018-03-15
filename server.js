require('babel-register')({
  presets: ['env', 'react']
});
const port = 3000;
const app = require('./server-entry.js')();
const httpServer = require('http').Server(app);

httpServer.listen(port, err => {
  console.log('Server listening on http://localhost:' + port);
});
