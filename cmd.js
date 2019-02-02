#!/usr/bin/env node
var iowrap = require('./index.js');
var child_process = require('child_process');

var child = child_process.spawn(process.argv[2], process.argv.slice(3));
child.stdout.on('data', function(data) {
  iowrap.output(data);
});

child.stderr.on('data', function(data) {
  iowrap.output(data);
});

iowrap.ev.on('input', function(input) {
  child.stdin.write(input);
});
