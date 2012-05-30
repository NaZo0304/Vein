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
var DATABASE_NAME = "vein_develop";
var EventEmitter =  require('events').EventEmitter;
var Sequelize = require("sequelize");
sequelize = new Sequelize(DATABASE_NAME, 'root', '', {
	dialect: 'mysql',
	host : "localhost",
	port : 3306
});

var DaoMethodFileManager = require("./DaoMethodFileManager");
tables = [];

// FIX ME : クエリージェネレーションってどう使うの！！ふぁあああ
sequelize.query("SHOW TABLES", null, {raw: true, sync:true}).on("success", execShowTables);
function execShowTables(rows) {
	rows.forEach(function(row){
		dmfm = new DaoMethodFileManager(sequelize, DATABASE_NAME, row);
		tables[tables.length] = dmfm;
		dmfm.execShowColumns();
		dmfm.doEmit();
//		tables[tables.length].execGetForeignKeys();
	});
}