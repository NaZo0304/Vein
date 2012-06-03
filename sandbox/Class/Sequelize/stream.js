var stream = require('stream')
  , util = require('util')
  , log = console.log.bind(console)
  ;

// 本来は 'data', 'end', 'error', 'close' イベントが必要
function TimerStream() {
  this.readable = true;
  this.t = 0;
  this.timer = null;
  this.piped = false;
}

// 継承、詳細は util.inherits を参照
util.inherits(TimerStream, stream.Stream);

TimerStream.prototype.resume = function() {
  this.timer = setInterval(function() {
    this.t++;
    if (this.t > 4) {
      return this.emit('end');
    }
    this.emit('data', this.t.toString());
  }.bind(this), 1000);
};

TimerStream.prototype.pause = function() {
  clearInterval(this.timer);
};

TimerStream.prototype.pipe = function(dest) {
  this.piped = true;

  // ここでは stream.Stream.prototype.pipe.apply(this, arguments); もok
  this.on('data', function(data) {
    dest.write(data);
  });
};

TimerStream.prototype.setEncoding = function(encoding) {};
TimerStream.prototype.destroy = function() {};
TimerStream.prototype.destroySoon = function() {};

module.exports = TimerStream;

if (require.main === module) {
  var timerStream = new TimerStream();
  timerStream.pipe(process.stdout);
  timerStream.resume();
}