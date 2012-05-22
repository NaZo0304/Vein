function SampleD(){
	/** EventEmitManagerInterface */
	this.doEmit = function () {
		console.log("called doEmit method!!!");
	}
	/** registEventEmitManager */
	this.eem = null;
}
module.exports = SampleD;