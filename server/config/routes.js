var mongoose = require('mongoose');
var users = require('../controllers/users');
var messages = require('../controllers/messages');
module.exports = function(app){

    app.get('/api/users', users.index);
    app.post('/api/user', users.login);
    app.post('/api/users/new', users.register);
    app.get('/api/messages', messages.index);
    app.post('/api/message', messages.createMessage);
    app.post('/api/comment', messages.createComment);

}