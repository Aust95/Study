var config = require ('./config.js');
exports.generate = function() {
	return Math.floor(Math.random()* global.max );
}