require('babel-register')({
  presets: ['env', 'react']
});

const app = require('./server-entry.js')();
const httpServer = require('http').Server(app);

httpServer.listen(3000, err => {
  console.log('Server listening on http://localhost:3000');
});
