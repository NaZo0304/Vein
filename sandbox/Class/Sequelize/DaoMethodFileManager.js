module.exports = (function() {
	var DaoMethodFileManager = function (sequelize, databaseName, tableName){
		this.sequelize = sequelize;
		this.databaseName = databaseName;
		this.tableName = tableName;
		console.log(tabkeName);
	};
	DaoMethodFileManager.prototype.execShowColumns = function () {
		sequelize.query("SHOW COLUMNS FROM " + tableName, null, {raw: true, sync:true})
		.success(function (rows) {
			columns = rows;
		});
	};
	DaoMethodFileManager.prototype.execGetForeignKeys = function () {
		sequelize.query("SELECT * FROM information_schema.TABLE_CONSTRAINTS as tc INNER JOIN information_schema.KEY_COLUMN_USAGE as kcu ON tc.CONSTRAINT_NAME = kcu.CONSTRAINT_NAME " +
				"WHERE kcu.TABLE_SCHEMA = '"+this.databaseName+"' AND kcu.TABLE_NAME = '"+this.tableName+"' " +
				"AND tc.CONSTRAINT_TYPE LIKE 'foreign key'", null, {raw: true, sync:true})
				.success(function(rows) {
					foreignKeys = rows;
				});
	};
	return DaoMethodFileManager;
});
