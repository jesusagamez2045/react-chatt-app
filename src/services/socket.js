import io from 'socket.io-client';

let socket = io('https://chatt-app-prueba.herokuapp.com');

export default socket;