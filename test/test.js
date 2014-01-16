var player = require('..')
var hyperquest = require('hyperquest')
var fs = require('fs')
// var client = require('music163-client')
// var test = require('tape')

// test('search', function(t) {
//   t.plan(1);

  // player.search('克卜勒', function(err, res) {
  //   if(err) console.log(err);
  //   var data = res.result;
  //   // console.log('search result: ', data)
  //   console.log('artists', data.artists)
  //   console.log();
  //   console.log('albums', data.albums)
  //   console.log();
  //   console.log('playlists', data.playlists)
  //   console.log();
  //   console.log('songs', data.songs)
  //   // t.equal(typeof res, 'object')
  // })
// })

// // test('album', function(t) {
// //   t.plan(1);

  // player.album('5151832', function(err, res) {
  //   if(err) console.log(err);
  //   console.log('res', res)
  //   // console.log('album info: ', res)
  //   // console.log('song: ', res.album.songs[0].name, res.album.songs[0].mp3Url)
  //   console.log('Album "' + res.album.name + '" by "' + res.album.artist.name + '" list: ')
  //   res.album.songs.forEach(function(song) {
  //       console.log(song.name + ': ' + song.mp3Url)
  //       // var req = hyperquest(song.mp3Url)
  //       //   .pipe(fs.createWriteStream(song.name + '.mp3'))
  //       // req.on('end', function() {
  //       //     console.log(song.name + 'download success.')
  //       // })
  //   })
  // //   // t.equal(typeof res, 'object')
  // })
// })

// // test('album', function(t) {
// //   t.plan(1);

  player.playlist('5151832', function(err, res) {
    if(err) console.log(err);
    // console.log('album info: ', res)
    // console.log('song: ', res.album.songs[0].name, res.album.songs[0].mp3Url)
    console.log('Playlist by "' + res.result.creator.nickname + '" List: ')
    res.result.tracks.forEach(function(song) {
        console.log(song.name + ': ' + song.mp3Url)
        // var req = hyperquest(song.mp3Url)
        //   .pipe(fs.createWriteStream(song.name + '.mp3'))
        // req.on('end', function() {
        //     console.log(song.name + 'download success.')
        // })
    })
  //   // t.equal(typeof res, 'object')
  })
// })

// test('detail', function(t) {
//   t.plan(1);

  // player.detail('233931', function(err, res) {
  //   if(err) console.log(err);
  //   console.log('song info: ', res)
    // t.equal(typeof res, 'object')
  // })
// })
