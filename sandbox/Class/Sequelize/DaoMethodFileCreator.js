function DaoMethodFileCreator(){
	if (this.instance != null) {
		this.instance = null;
	};

	this.getInstance = function () {
		if (this.instance == null) {
			this.instance = function () {
				this.columns = [];
				this.foreignKeys = [];
			};
			return this.instance;
		} else {
			return this.instanc;
		}
	};
}
module.exports = DaoMethodFileCreator;