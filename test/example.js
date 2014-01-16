var player = require('..')
var hyperquest = require('hyperquest')
var fs = require('fs')

// search example
player.search('克卜勒', function(err, res) {
  if(err) console.log(err);
  var data = res.result;
  console.log('artists', data.artists)
  console.log();
  console.log('albums', data.albums)
  console.log();
  console.log('playlists', data.playlists)
  console.log();
  console.log('songs', data.songs)
})

// album example
player.album('5151832', function(err, res) {
  if(err) console.log(err);
  console.log('res', res)
  // console.log('album info: ', res)
  // console.log('song: ', res.album.songs[0].name, res.album.songs[0].mp3Url)
  console.log('Album "' + res.album.name + '" by "' + res.album.artist.name + '" list: ')
  res.album.songs.forEach(function(song) {
      console.log(song.name + ': ' + song.mp3Url)
      // var req = hyperquest(song.mp3Url)
      //   .pipe(fs.createWriteStream(song.name + '.mp3'))
      // req.on('end', function() {
      //     console.log(song.name + 'download success.')
      // })
  })
})

// play list example
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
})

// music detail example
player.detail('233931', function(err, res) {
  if(err) console.log(err);
  console.log('song info: ', res)
})
