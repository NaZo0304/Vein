var stream = require('stream')
  , util = require('util')
  , log = console.log.bind(console)
  ;

function SampleReadStream(database, tableName) {
  this.readable = true;
  this.piped = false;
  this.database = database;
  this.tableName = tableName;

  this.showColumnsFlag = false;
  this.foreignKeysFlag = false;
}

//継承、詳細は util.inherits を参照
util.inherits(SampleReadStream, stream.Stream);


SampleReadStream.prototype.checkEnd = function() {
	if (this.showColumnsFlag && this.foreignKeysFlag) {
	}
};
SampleReadStream.prototype.resume = function() {
	var ref = this;
	// query 実行{

	sequelize.query("SHOW COLUMNS FROM " + this.tableName, null, {raw: true, sync:true})
	.success(function (rows) {
//	    ref.emit('data', {"target" : "","data" : rows, "tableName" : ref.tableName});
	    ref.showColumnsFlag = true;
	    ref.checkEnd();
	});
	sequelize.query("SELECT * FROM information_schema.TABLE_CONSTRAINTS as tc INNER JOIN information_schema.KEY_COLUMN_USAGE as kcu ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME " +
			"WHERE kcu.TABLE_SCHEMA = '"+this.database+"' AND kcu.TABLE_NAME = '"+this.tableName+"' " +
			"AND tc.CONSTRAINT_TYPE LIKE 'foreign key'", null, {raw: true, sync:true})
	.success(function(rows) {
	    ref.emit('data', {"target" : "","data" : rows, "tableName" : ref.tableName});
		ref.foreignKeysFlag = true;
	    ref.checkEnd();
	});
};

SampleReadStream.prototype.pause = function() {
};

SampleReadStream.prototype.pipe = function(dest) {
  this.piped = true;
  this.on('data', function(rows) {
    dest.write(rows);
  });
};

SampleReadStream.prototype.setEncoding = function(encoding) {};
SampleReadStream.prototype.destroy = function() {};
SampleReadStream.prototype.destroySoon = function() {};

module.exports = SampleReadStream;