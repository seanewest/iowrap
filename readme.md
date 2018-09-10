# iowrap
Prevents output that is being printed to the terminal from interrupting your input as it is being typed.

## install
```
npm install seanewest/iowrap
```

## example

```javascript
var iowrap = require('iowrap');

setInterval(function() {
  iowrap.output('some random msg');
}, 2000);

iowrap.ev.on('input', function(input) {
  setTimeout(function() {
    iowrap.output('hey thanks I got your msg: ' + input);
  }, 200);
});
```
