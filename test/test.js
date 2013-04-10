var LinearEquation = require('../')
var test = require('tap').test;

var mappingTests = [{
    equation: {
      m: 0,
      b: 0
    },
    tests: [
      [-1, 0],
      [0, 0],
      [1, 0]
    ]
},{
    equation: {
      m: 0,
      b: 1
    },
    tests: [
      [-1, 1],
      [0, 1],
      [1, 1]
    ]
},{
    equation: {
      m: 1,
      b: 0
    },
    tests: [
      [-1, -1],
      [0, 0],
      [1, 1]
    ]
}, {
    equation: {
      m: 2,
      b: 2
    },
    tests: [
      [-1, 0],
      [0, 2],
      [1, 4]
    ]
}]


test("can map x to y", function (t) {
    var tests = mappingTests
      .map(function(f) {return f.tests})
      .reduce(function (acc, cur) {
        return acc + cur.length
      }, 0)
    t.plan(tests);

    mappingTests.forEach(function (fixture) {
      var line = new LinearEquation(fixture.equation.m, fixture.equation.b)
      fixture.tests.forEach(function(v) {
        t.equal(line.map(v[0]), v[1])
      })
    })
});