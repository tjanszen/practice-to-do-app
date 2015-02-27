'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var User;

var userSchema = mongoose.Schema({
  email:{type: String, required: true},
  password:{type: String, required: true},
  createdAt:{type: Date, default: Date.now, required: true}
});

userSchema.statics.register = function(o, cb) {
  User.findOne({email:o.email}, function(err, user) {
    if(user) { return cb(true); }

    user = new User(o);
    user.password = bcrypt.hashSync(o.password, 8);
    user.save(cb);
  });
};
