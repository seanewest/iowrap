## iowrap
Prevents output that is being printed to the terminal from interrupting input as it is being typed.

```javascript
var iowrap = require('./index.js');

setInterval(function() {
  iowrap.output('some random msg');
}, 2000);

iowrap.ev.on('input', function(input) {
  setTimeout(function() {
    iowrap.output('hey thanks I got your msg: ' + input);
  }, 200);
});
```
