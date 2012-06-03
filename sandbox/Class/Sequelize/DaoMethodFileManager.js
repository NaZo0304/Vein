var EventEmitter =  require('events').EventEmitter;
module.exports = (function() {
	var DaoMethodFileManager = function (sequelize, databaseName, tableName){

		this.databaseName = databaseName;
		this.tableName = tableName;
		this.execGetForeignKeysFlag = false;
		this.execShowColumnsFlag = false;
		this.evm = new EventEmitter();
		this.evm.on('stream', this.output);
	};
	DaoMethodFileManager.prototype.build = function () {
		console.log("success" + this.tableName);
	};
	DaoMethodFileManager.prototype.failure = function () {
		console.log("failure" + this.tableName);
	};
	DaoMethodFileManager.prototype.execShowColumns = function () {
		execGetForeignKeysFlag = false;
		sequelize.query("SHOW COLUMNS FROM " + this.tableName, this, {raw: false, sync:true})
		.success(function (rows) {
			console.log(this);
			columns = rows;
			this.execShowColumsFlag = true;
			//this.doEmit();
		});
	};
	DaoMethodFileManager.prototype.execGetForeignKeys = function () {
		var ref = this;
		sequelize.query("SELECT * FROM information_schema.TABLE_CONSTRAINTS as tc INNER JOIN information_schema.KEY_COLUMN_USAGE as kcu ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME " +
				"WHERE kcu.TABLE_SCHEMA = '"+databaseName+"' AND kcu.TABLE_NAME = '"+tableName+"' " +
<<<<<<< HEAD
				"AND tc.CONSTRAINT_TYPE LIKE 'foreign key'", null, {raw: true, sync:true})
		.success(function(rows) {
				ref.foreignKeys = rows;
				ref.execGetForeignKeysFlag = true;
				ref.doEmit();
=======
				"AND tc.CONSTRAINT_TYPE LIKE 'foreign key'", null, {raw: false, sync:false})
		.success(function(rows,a) {
				foreignKeys = rows;
				console.log(this.execGetForeignKeysFlag);
				execGetForeignKeysFlag = true;
				console.log(this.execGetForeignKeysFlag);
			//	this.doEmit();
>>>>>>> branch 'master' of git@github.com:NaZo0304/Vein.git
		});
	};
	DaoMethodFileManager.prototype.doEmit = function () {
		console.log(this.execShowColumnsFlag +":"+ this.execGetForeignKeysFlag);
		if (this.execShowColumnsFlag && this.execGetForeignKeysFlag) {
			console.log("asdasda");
			evm.emit("stream",arg);
		} else {
			console.log("notnotnot");
		}
	};
	DaoMethodFileManager.prototype.output = function () {
		console.log("emittererere");
	};

	return DaoMethodFileManager;
})();
