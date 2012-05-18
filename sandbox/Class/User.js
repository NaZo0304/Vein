/**
 * 試しにクラス化
 */
function User(name){
	this.name = name;
}

/**
 * クラス定義
 */
User.prototype = {
	/**
	 * ユーザ名
	 */
	name : null
};
module.exports = User;