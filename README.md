### music163
[![NPM](https://nodei.co/npm/music163.png)](https://nodei.co/npm/music163/)

[![Build Status](https://travis-ci.org/fraserxu/music163.png?branch=master)](https://travis-ci.org/fraserxu/music163)

nodejs client for music163

Install
---
The easiest way to use music163 is to install it with npm:

`npm install music163`

API
---
Currently, there's five (useful) methods available:

```javascript
search: function('G.E.M', cb)
```

```javascript
album: function('23497', cb)
```

```javascript
playlist: function('5151832', cb)
```

```javascript
dj: function('73004', cb)
```

```javascript
detail: function('233931', cb)
```

Example
-------
```javascript
var music163 = require('music163');

music163.search('G.E.M', function(err, data) {
  if ( err ) {
    console.log('Error occurred: ' + err);
    return;
  }

  // Do something with 'data'
});
```

See more example [here](https://github.com/fraserxu/music163/blob/master/test/example.js)

License
-------

The MIT License (MIT)

Copyright (c) 2014 xvfeng

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

