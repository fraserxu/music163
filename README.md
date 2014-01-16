### music163

nodejs client for music163

Install
---
The easiest way to use music163 is to install it with npm: `npm install music163`

API
---
Currently, there's only for (useful) methods available:

```javascript
search: function('G.E.M', cb)
```

```javascript
album: function('23497', cb)
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
