var EventEmitter = require('events').EventEmitter;

var SyncTest = require('./Class/SyncTest.js');
// EvEmitter登録
var ev = new EventEmitter;

var sample = new SyncTest(ev);
ev.on('emitExecute', sample.emitFunc);

sample.setA();
sample.setB();
sample.setC();