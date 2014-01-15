var player = require('..')
// var test = require('tape')

// test('search', function(t) {
//   t.plan(1);

  player.search('Love Story', function(err, res) {
    if(err) console.log(err);
    console.log('search result: ', res)
    // t.equal(typeof res, 'object')
  })
// })

// test('album', function(t) {
//   t.plan(1);

  player.album('23497', function(err, res) {
    if(err) console.log(err);
    console.log('album info: ', res)
  //   // t.equal(typeof res, 'object')
  })
// })

// test('detail', function(t) {
//   t.plan(1);

  player.detail('233931', function(err, res) {
    if(err) console.log(err);
    console.log('song info: ', res)
    // t.equal(typeof res, 'object')
  })
// })
