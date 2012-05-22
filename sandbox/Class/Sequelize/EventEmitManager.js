var EventEmitter = require('events').EventEmitter;

function EventEmitManager(emitter, instances){
	console.log("constructor EventEmitManager");
	this.emitter = emitter;
	this.instances = instances;
	for(var x=0;x<this.instances.length;x++){
		this.instances[x].eem = this;
	}

	// FIXME EventEmitterのkeyが同じだとおかしくなると思うので検討する必要あり
	var ev = new EventEmitter;
	ev.on('emitter', function () {
		emitter.doEmit();
	});

	this.checkEmit = function () {
		var flag = true;
		for(var x=0;x<this.instances.length;x++){
			if (!this.instances[x].checkEmit())
				flag = false;
		}
		if (flag) {
			console.log("call emitter!!");
			ev.emit('emitter');
		} else {
			console.log("none call emitter..");
		}
	};
}
module.exports = EventEmitManager;