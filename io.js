var readline = require('readline');

readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY) {
  process.stdin.setRawMode(true);
}

inputbuff = '';

setInterval(function() {
  //clear line
  process.stdout.write('\033[1K');
  //bring cursor to beginning
  process.stdout.write('\033[1G');

  process.stdout.write('sample output\n');
  process.stdout.write(inputbuff);
}, 2000);

process.stdin.on('keypress', function(character, keyinfo) {
  if (keyinfo.name === 'c' && keyinfo.ctrl === true || keyinfo.name === 'd' && keyinfo.ctrl === true) {
    process.exit(0);
  }
  if (keyinfo.name === 'return') {
    inputbuff = '';
    process.stdout.write('\n');
  } else if (keyinfo.name === 'backspace' && inputbuff.length > 0) {
    inputbuff = inputbuff.substring(0, inputbuff.length-1);
    //move cursor to the left one position
    process.stdout.write('\033[1D');
    //delete character under cursor
    //(would delete afterwards if there was anything)
    process.stdout.write('\033[0K');
  } else if (character !== undefined) {
    inputbuff += character;
    process.stdout.write(character);
  }
});
process.stdin.on('data', function(data) {
  //data is a single letter unfortunately, might have
  //to process data when they press enter
});
