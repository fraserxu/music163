var music163 = require('..')
var test = require('tape')

test('module', function(t) {
  t.plan(6)

  t.equal(typeof music163, 'object')
  t.equal(typeof music163.search, 'function')
  t.equal(typeof music163.playlist, 'function')
  t.equal(typeof music163.album, 'function')
  t.equal(typeof music163.detail, 'function')
  t.equal(typeof music163.dj, 'function')
})