var hyperquest = require('hyperquest')
var qs = require('querystring')
var concat = require('concat-stream')

var API = {
  search: 'http://music.163.com/api/search/suggest/web',
  album: 'http://music.163.com/api/album/',
  detail: 'http://music.163.com/api/song/detail'
}

var HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Windows; U; Windows NT 6.1; en-US; rv:1.9.1.6) Gecko/20091201 Firefox/3.5.6',
  'Referer': 'http://music.163.com/'
}

module.exports = {
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