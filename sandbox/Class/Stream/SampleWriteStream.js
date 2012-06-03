
function SampleWriteStream() {
	this.json = null;
}

SampleWriteStream.prototype.write = function(data) {
	console.log(data);
};

SampleWriteStream.prototype.close = function() {
	console.log("close");
};
module.exports = SampleWriteStream;