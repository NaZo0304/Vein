var EventEmitManager = require('./EventEmitManager.js');
var SampleA = require('./SampleA.js');
var SampleB = require('./SampleB.js');
var SampleC = require('./SampleC.js');
var SampleD = require('./SampleD.js');

var sampleA = new SampleA();
var sampleB = new SampleB();
var sampleC = new SampleC();
var sampleD = new SampleD();

/**
 * sampleA / sampleB / sampleC の全てのフラグがONになった時、sampleDのdoEmitを実行する
 * I/FとしてEventEmitManagerは 発火条件methodのcheckEmitを呼び出す。全ての条件がtrueだったとき発火method doEmitを実行する。
 */
var eem = new EventEmitManager(sampleD, new Array(sampleA, sampleB, sampleC));
sampleA.flagOn();
sampleB.flagOn();
sampleC.flagOn();