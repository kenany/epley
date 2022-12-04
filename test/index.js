const test = require('tape');
const isFunction = require('lodash.isfunction');
const almostEqual = require('almost-equal');

const epley = require('../');

test('exports a function', function(t) {
  t.plan(1);
  t.ok(isFunction(epley));
});

test('100 for 10', function(t) {
  t.plan(1);
  t.ok(almostEqual(epley(100, 10), 133, 0.34));
});

test('100 for 6', function(t) {
  t.plan(1);
  t.equal(epley(100, 6), 120);
});
