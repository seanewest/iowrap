var iowrap = require('./io.js');

setInterval(function() {
  iowrap.output('some random msg');
}, 2000);

iowrap.ev.on('input', function(input) {
  //the following does not work ... outputting too close to input?
  //iowrap.output('hey thanks I got your msg: ' + input);
  setTimeout(function() {
    iowrap.output('hey thanks I got your msg: ' + input);
  }, 200);
});

