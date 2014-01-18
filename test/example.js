var music163 = require('..')
var hyperquest = require('hyperquest')
var fs = require('fs')
var Player = require('player')

/**
 * search example
 */
music163.search('G.E.M邓紫琪', function(err, res) {
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

/**
 * album example
 */
music163.album('5151832', function(err, res) {
  if(err) console.log(err);
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

/**
 * play list example
 */
music163.playlist('7634793', function(err, res) {
  if(err) console.log(err);
  console.log('Playlist by "' + res.result.creator.nickname + '" List: ')
  var songs = [];
  res.result.tracks.forEach(function(song) {
      console.log(song.name + ': ' + song.mp3Url)
      songs.push(song.mp3Url)
  })
  var player = new Player(songs);
  player.play();

  player.on('playing',function(item){
    console.log('im playing... src:' + item);
  });

  player.on('playend',function(item){
    console.log('src:' + item + ' play done, switching to next one ...');
  });

  player.on('error', function(err){
    console.log(err);
  });

})

/**
 * dj list example
 */
music163.dj('73004', function(err, res) {
  if(err) console.log(err);
  console.log('DJ by "' + res.program.dj.nickname + '" List: ')
  var songs = [];
  res.program.songs.forEach(function(song) {
      console.log(song.name + ': ' + song.mp3Url)
  })
})

/**
 * music detail example
 */
music163.detail('233931', function(err, res) {
  if(err) console.log(err);
  console.log('song info: ', res)
})
