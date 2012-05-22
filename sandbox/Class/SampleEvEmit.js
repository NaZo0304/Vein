/**
 * 試しにクラス化
 */
function SampleEvEmit(ev){
	this.ev = ev;
	this.a = false;
	this.b = false;
	this.c = false;
	this.emitFunc = function () {
		console.log("emit Func 発火！！");
	}
	this.setA = function () {
		this.a = true;
		this.doEmit();
	}
	this.setB = function () {
		this.b = true;
		this.doEmit();
	}
	this.setC = function () {
		this.c = true;
		this.doEmit();
	}
	// 全部 trueだったら EventEmitter で emitFuncを発火
	this.doEmit = function () {
		if (this.a && this.b && this.c){
			// 発火！！！！！！
			this.ev.emit('emitExecute');
		} else {
			console.log("発火せず！");
		}
	}
}
module.exports = SampleEvEmit;