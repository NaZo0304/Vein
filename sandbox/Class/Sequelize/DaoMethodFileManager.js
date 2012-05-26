var EventEmitter =  require('events').EventEmitter;
module.exports = (function(sequelize, databaseName, tableName) {
	var DaoMethodFileManager = function (sequelize, databaseName, tableName){
		this.databaseName = databaseName;
		this.tableName = tableName;
		this.execShowColumnsFlag = false;
		this.execGetForeignKeysFlag = false;
		this.evm = new EventEmitter();
		this.evm.on('stream', output);
	};
	DaoMethodFileManager.prototype.execShowColumns = function () {
		sequelize.query("SHOW COLUMNS FROM " + tableName, null, {raw: true, sync:true})
		.success(function (rows) {
			columns = rows;
			this.execShowColumsFlag = true;
			this.doEmit();
		});
	};
	DaoMethodFileManager.prototype.execGetForeignKeys = function () {
		sequelize.query("SELECT * FROM information_schema.TABLE_CONSTRAINTS as tc INNER JOIN information_schema.KEY_COLUMN_USAGE as kcu ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME " +
				"WHERE kcu.TABLE_SCHEMA = '"+databaseName+"' AND kcu.TABLE_NAME = '"+tableName+"' " +
				"AND tc.CONSTRAINT_TYPE LIKE 'foreign key'", null, {raw: true, sync:true})
		.success(function(rows) {
				foreignKeys = rows;
				this.execGetForeignKeysFlag = true;
				this.doEmit();
		});
	};
	DaoMethodFileManager.prototype.doEmit = function () {
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

	DaoMethodFileManager.prototype.execShowColumns();
	DaoMethodFileManager.prototype.execGetForeignKeys();

	return DaoMethodFileManager;
});
