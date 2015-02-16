'use strict';

module.exports = {
  handler: function(request, reply) {
    var numbers = request.params.list.split(',');
    var squares = numbers.map(function(n) {return n * n;});
    reply.view('templates/math/squares', {numbers:numbers, squares:squares});
  }
};
