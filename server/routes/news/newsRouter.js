const express = require('express');
const passport = require('passport');
const service = require('./newsService');
const route = express.Router();

route.get('/', service.getAll);

route.get('/:id', service.getById);

route.post('/post',
    passport.authenticate('jwt', {session: false}),
    service.createNews);

route.delete('/delete/:id',
    passport.authenticate('jwt', {session: false}),
    service.delete);

route.put('/update/:id',
    passport.authenticate('jwt', {session: false}),
    service.update);

module.exports.route = route;