import openSocket from 'socket.io-client';
import config from '../config';
var socket = openSocket(config.socket_uri);

const requestChats = (user) => {
    socket.emit('getChats', user);
}

const subscribeToChats = (cb) => {
    socket.on('chats', chats => cb(chats));
}

const requestChat = (chat) => {
    socket.emit('getChat', chat);
}

const subscribeToChat = (cb) => {
    socket.on('chat', chat => cb(chat));
}

const sendMessage = (message) => {
    socket.emit('sendMessage', message);
}

const subscribeToReceivedMessage = (cb) => {
    socket.on('receivedMessage', message => cb(message));
}

export { 
    requestChats,
    subscribeToChats,
    requestChat,
    subscribeToChat,
    sendMessage,
    subscribeToReceivedMessage
}