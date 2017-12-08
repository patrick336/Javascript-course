import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { AppContainer } from 'react-hot-loader';

// ReactDOM.render(<App />, document.getElementById('app'));
// if (module.hot) {
//     module.hot.accept('./containers/App', () => {
//         const NextApp = require('./containers/App').default;
//         ReactDOM.render(
//             <AppContainer>
//             <Component />
//             </AppContainer>,
//             document.getElementById('app')
//         );
//     });
// }

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('app')
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NewApp = require('./containers/App').default;
        render(NewApp)
    });
}

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const usersService = require('./UsersService');

const userService = new UsersService();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    //miejsce dla funkcji, które zostaną wykonane po podłączeniu klienta
    socket.on('join', function(name) {
        userService.addUser({
            id: socket.id,
            name
        });
    });
    io.emit('update', {
        users: userService.getAllusers()
    });
    socket.on('disconnect', () => {
        userService.removeUser(socket.id);
        socket.broadcast.emit('update', {
            users: usersService.getAllusers()
        });
    });
    socket.on('message', function(message){
        const {name} = userService.getUserById(socket.id);
        socket.broadcast.emit('message', {
            text: message.text,
            form: name
        });
    });
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});
