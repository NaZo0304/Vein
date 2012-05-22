var fs = require('fs');
/**
 * SequelizeのDAO Classを生成するためのクラス
 */
function DaoFileManager(tableName){
	this.tableName = tableName;
	this.columuns = null;
	this.output = function () {

	};
}
module.exports = DaoFileManager;