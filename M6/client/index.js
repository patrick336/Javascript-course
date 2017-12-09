import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App';

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
    module.hot.accept('./App', () => {
        const NewApp = require('./App').default;
        render(NewApp)
    });
}

const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const UsersService = require('./UsersService');

const userService = new UsersService();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    //miejsce dla funkcji, które zostaną wykonane po podłączeniu klienta
    socket.on('join', function(name){
        //for debug
        userService.printusers();
        // użytkownika, który pojawił się w aplikacji zapisujemy do serwisu trzymającego listę osób w czacie
        userService.addUser({
            id: socket.id,
            name
        });
        // aplikacja emituje zdarzenie update, które aktualizuje informację na temat listy użytkowników każdemu nasłuchującemu na wydarzenie 'update'
        io.emit('update', {
            users: userService.getAllUsers()
        });
    });
    // Obsługa przerwania połączenia z serwerem
    socket.on('disconnect', () => {
        userService.removeUser(socket.id);
        socket.broadcast.emit('update', {
            users: userService.getAllUsers()
        });
        //for debug
        userService.printusers();
    });
    // Obsługa wysyłania wiadomości do użytkowników czatu
    socket.on('message', function(message){
        const {name} = userService.getUserById(socket.id);
        socket.broadcast.emit('message', {
            text: message.text,
            from: name
        });
    });
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});
