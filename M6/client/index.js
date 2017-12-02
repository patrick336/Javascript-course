// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './containers/App';
// import { AppContainer } from 'react-hot-loader';
//
// ReactDOM.render(<App />, document.getElementById('app'));
// if (module.hot) {
//     module.hot.accept('./containers/App', () => {
//         const NextApp = require('./containers/App').default;
//         ReactDOM.render(
//             <AppContainer>
//             <NextApp />
//             </AppContainer>,
//             document.getElementById('app')
//         );
//     });
// }
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});
