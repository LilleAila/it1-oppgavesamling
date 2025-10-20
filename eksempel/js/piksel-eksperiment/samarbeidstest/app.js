/*
    To-do:
    To allow two different users on two different browsers to collaborate on drawing in your program, 
    you would need to implement a real-time communication system. 
    This could be achieved using WebSockets or a real-time communication library like Socket.IO.

    Here's a high-level overview of how you could implement this:

    Set up a server using Node.js and Express.
    Implement Socket.IO on both the server and client side.
    When a user draws on their browser, emit a message from the client side to the server 
    with the details of the drawing (like which pixel was colored, and what color was used).
    The server then broadcasts this message to all connected clients.
    When a client receives a message from the server, it updates the corresponding pixel with the received color.
    This way, all users would see the changes in real-time.

    Please note that this is a high-level overview and the actual implementation might require 
    handling more details.
*/

const express = require('express');
const app = express();
const port = 3000;

const socket = require('socket.io');


app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));