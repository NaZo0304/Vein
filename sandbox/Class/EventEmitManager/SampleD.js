function SampleD(){
	this.param = null;
	/** EventEmitManagerInterface */
	this.doEmit = function () {
		console.log("called doEmit method!!!" + this.param.message);
	};
	/** registEventEmitManager */
	this.eem = null;
}
module.exports = SampleD;