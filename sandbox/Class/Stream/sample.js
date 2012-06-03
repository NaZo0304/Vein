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
var EventEmitter =  require('events').EventEmitter;
var Sequelize = require("sequelize");
sequelize = new Sequelize(DATABASE_NAME, 'root', 'masato@123', {
	dialect: 'mysql',
	host : "localhost",
	port : 3306
});
var SampleWriteStream =  require('./SampleWriteStream');
var SampleReadStream =  require('./SampleReadStream');
table = [];
sequelize.query("SHOW TABLES", null, {raw: true, sync:true}).on("success", execShowTables);
function execShowTables(rows) {
	rows.forEach(function(row){
		// Streamの生成
		var srs = new SampleReadStream(DATABASE_NAME, row);
		var sws = new SampleWriteStream();
		srs.pipe(sws);
		srs.resume();
		table[table.length] = srs;
	});
}