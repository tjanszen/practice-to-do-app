'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/register', config: require('../routes/users/register')},
  {method: 'post', path: '/users', config: require('../register/users/create')}
];
