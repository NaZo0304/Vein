var EventEmitter = require('events').EventEmitter;

var SampleEvEmit = require('./Class/SampleEvEmit.js');
// EvEmitter登録
var ev = new EventEmitter;

var sample = new SampleEvEmit(ev);
ev.on('emitExecute', sample.emitFunc);

sample.setA();
sample.setB();
sample.setC();