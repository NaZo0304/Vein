function DaoMethodFileManager(){
	this.tableName = null;
	this.columns = [];
	this.foreignKeys = [];

	this.addColumn = function(name, type) {
		this.columns[this.columns] = {"name" : name, "type" : type};
	};
	this.addForeignKey = function (parentTableName, childTableName, type){
		this.foreignKeys[this.foreignKeys] = {"parentTableName" : parentTableName, "childTableName" : childTableName, "type" : type};
	}
}
module.exports = DaoMethodFileManager;