var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/foobank', { useMongoClient: true });
mongoose.Promise = global.Promise;

module.exports = mongoose;