function SampleB(){
	this.flag = false;
	this.flagOn = function (){
		this.flag = true;
		// FIXME いちいちチェックタイミングを呼び出さないといけないのかなーーー
		this.eem.checkEmit();
	}
	/** EventEmitManagerInterface */
	this.checkEmit = function () {
		return this.flag;
	}
	/** registEventEmitManager */
	this.eem = null;
}
module.exports = SampleB;