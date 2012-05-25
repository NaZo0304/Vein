/*
1. テーブル一覧を取得
　SHOW TABLES
2. テーブルの情報を取得
　SHOW COLUMNS FROM *****
　**** = テーブル名
3. 外部参照キーを取得
　SELECT * from information_schema.table_constraints WHERE TABLE_SCHEMA = '****' AND TABLE_NAME = '****' AND CONSTRAINT_TYPE LIKE 'foreign key';
　**** = データベーススキーマ名
　**** = テーブル名
4. file output
　形式は写真参照
 */
var DATABASE_NAME = "database_script_dev";
var Sequelize = require("sequelize");
var sequelize = new Sequelize(DATABASE_NAME, 'root', 'masato@123', {
	dialect: 'mysql',
	host : "localhost",
	port : 3306
});

var DaoMethodFileManager = require("./DaoMethodFileManager");

var tables = [];

// FIX ME : クエリージェネレーションってどう使うの！！ふぁあああ
sequelize.query("SHOW TABLES", null, {raw: true, sync:true}).on("success", execShowTables);
function execShowTables(rows) {
	rows.forEach(function(row){
//		tables[row] = new DaoMethodFileManager(sequelize, DATABASE_NAME, row);
		var a = new DaoMethodFileManager(sequelize, DATABASE_NAME, row);
	});
}