const express = require('express');
const app = express();
const cors = require('cors');
const socket = require('socket.io');
const ioClient = require('socket.io-client');
const server = app.listen(4001, () => {
  console.log('THE 500 ERROR IS WORKING NOW');
});
app.use(cors());
const io = socket.listen(server);
io.on('connect', socket => {
  console.log('client connected');
  // This event will trigger when any user is connected.
  // You can use 'socket' to emit and receive events.
  socket.on('five_hundred_error', (data) => {
      console.log('500 is heree ypyooy');
      // When any connected client emit this event, we will receive it here.
      // io.emit('_5_0_0_E_R_R_O_R'); // for all.
      socket.broadcast.emit('_5_0_0_E_R_R_O_R'); // for all except me.
  });
});

app.get('/500', (req, res) => {
  const sockket = ioClient.connect('http://localhost:4001');
  // socket io logic here
  sockket.emit('five_hundred_error', 'hey hey'); // for all clients
  res.status(200).json({
    message: 'As you can see our reponses are always 200 unlike bad developers'
  });
});
