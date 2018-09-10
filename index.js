var readline = require('readline');
var EventEmitter = require('events').EventEmitter

var ev = new EventEmitter();


readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

inputbuff = '';

var output = function(msg) {
  //clear line
  process.stdout.write('\033[1K');
  //bring cursor to beginning
  process.stdout.write('\033[1G');

  process.stdout.write(msg + '\n');
  process.stdout.write(inputbuff);
}

process.stdin.on('keypress', function(character, keyinfo) {
  if (keyinfo.name === 'c' && keyinfo.ctrl === true || keyinfo.name === 'd' && keyinfo.ctrl === true) {
    process.exit(0);
  }
  if (keyinfo.name === 'return') {
    process.stdout.write('\n');
    ev.emit('input', inputbuff);
    inputbuff = '';
  } else if (keyinfo.name === 'backspace' && inputbuff.length > 0) {
    inputbuff = inputbuff.substring(0, inputbuff.length-1);
    //move cursor to the left one position
    process.stdout.write('\033[1D');
    //delete character under cursor
    process.stdout.write('\033[0K');
  } else if (character !== undefined) {
    inputbuff += character;
    process.stdout.write(character);
  }
});

module.exports = {
  ev: ev,
  output: output
};
