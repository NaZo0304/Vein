var APPLCIATION_PATH = "C:/Users/developer/git/nazo";

var fs = require('fs');

console.log("ファイルいじる" + APPLCIATION_PATH + '/tmp/hello');
/*
fs.rename(APPLCIATION_PATH + '/tmp/hello', APPLCIATION_PATH + '/tmp/world', function(err) {
	if (err)
		throw err;
	console.log('renamed complete');
});
fs.stat(APPLCIATION_PATH + '/tmp/world', function(err, stats) {
	if (err)
		throw err;
	console.log('stats: ' + JSON.stringify(stats));
});
*/

console.log("クラス化");
var User = require('./Class/User.js');
var user = new User("かわかみ");
console.log(user.name);