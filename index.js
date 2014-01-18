/**
 * Module Dependencies
 */
var hyperquest = require('hyperquest')
var qs = require('querystring')
var concat = require('concat-stream')

/**
 * API
 */
var API = {
  search: 'http://music.163.com/api/search/suggest/web',
  album: 'http://music.163.com/api/album/',
  detail: 'http://music.163.com/api/song/detail',
  playlist: 'http://music.163.com/api/playlist/detail',
  dj: 'http://music.163.com/api/dj/program/detail'
}

/**
 * HEADERS
 */
var HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6',
  'Referer': 'http://music.163.com/'
}

module.exports = {
  /**
   * search song/album/playlist
   * @param  {string}   key keywords
   * @param  {Function} cb  callback fucntion
   * @return {Object}       response data
   */
  search: function(key, cb) {
    var params = {
      limit: 20,
      s: key,
      csrf_token: ''
    }

    var req = hyperquest({
      uri: API.search + '?',
      headers: HEADERS,
      method: 'POST'
    })
    req.setHeader('Content-Type', 'application/x-www-form-urlencoded')
    req.setHeader('Content-Length', qs.stringify(params).length)
    req.end(qs.stringify(params))
    req.pipe(concat(function(data) {
      return cb(null, JSON.parse(data))
    }))

    req.on('error', function(err) {
      return cb(err)
    })
  },

  /**
   * get playlist by ID
   * @param  {string}   key ID
   * @param  {Function} cb  callback function
   * @return {object}       response playlist
   */
  playlist: function(key, cb) {
    var params = {
      id: key,
      csrf_token: ''
    }

    var req = hyperquest({
      uri: API.playlist + '?' + qs.stringify(params),
      headers: HEADERS
    }).pipe(concat(function(data) {
      return cb(null, JSON.parse(data))
    }))

    req.on('error', function(err) {
      return cb(err)
    })
  },

  /**
   * get playlist by ID
   * @param  {string}   key ID
   * @param  {Function} cb  callback function
   * @return {object}       response playlist
   */
  dj: function(key, cb) {
    var params = {
      id: key,
      csrf_token: ''
    }

    var req = hyperquest({
      uri: API.dj + '?' + qs.stringify(params),
      headers: HEADERS
    }).pipe(concat(function(data) {
      return cb(null, JSON.parse(data))
    }))

    req.on('error', function(err) {
      return cb(err)
    })
  },

  /**
   * get album list by ID
   * @param  {string}   key ID
   * @param  {Function} cb  callback function
   * @return {object}       response album list
   */
  album: function(key, cb) {
    var params = {
      id: key,
      csrf_token: ''
    }

    var req = hyperquest({
      uri: API.album + key + '?' + qs.stringify(params),
      headers: HEADERS
    }).pipe(concat(function(data) {
      return cb(null, JSON.parse(data))
    }))

    req.on('error', function(err) {
      return cb(err)
    })
  },

  /**
   * get details of a song by ID
   * @param  {string}   key ID
   * @param  {Function} cb  callback function
   * @return {object}       response detail info of a song
   */
  detail: function(key, cb) {
    var params = {
      id: key,
      ids: '[' + key + ']',
      csrf_token: ''
    }

    var req = hyperquest({
      uri: API.detail + '?' + qs.stringify(params),
      headers: HEADERS
    }).pipe(concat(function(data) {
      return cb(null, JSON.parse(data))
    }))

    req.on('error', function(err) {
      return cb(err)
    })
  }

}